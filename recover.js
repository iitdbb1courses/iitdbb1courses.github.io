const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function recover() {
    const transcriptPath = 'C:\\Users\\91983\\.gemini\\antigravity\\brain\\d9bb981f-045f-47df-9ea9-20b7e22f44ec\\.system_generated\\logs\\transcript_full.jsonl';
    
    if (!fs.existsSync(transcriptPath)) {
        console.error('Transcript not found');
        return;
    }

    const fileStates = {}; // Map of filename -> content

    const fileStream = fs.createReadStream(transcriptPath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        if (!line.trim()) continue;
        try {
            const step = JSON.parse(line);
            if (step.type === 'PLANNER_RESPONSE' && step.tool_calls) {
                for (const call of step.tool_calls) {
                    if (call.name === 'write_to_file') {
                        const args = call.args;
                        if (args && args.TargetFile && args.CodeContent) {
                            fileStates[args.TargetFile] = args.CodeContent;
                            console.log(`[write_to_file] ${args.TargetFile}`);
                        }
                    } else if (call.name === 'replace_file_content') {
                        const args = call.args;
                        if (args && args.TargetFile && args.TargetContent && args.ReplacementContent !== undefined) {
                            let content = fileStates[args.TargetFile];
                            if (content) {
                                // Find exact target content and replace
                                if (content.includes(args.TargetContent)) {
                                    if (args.AllowMultiple) {
                                        content = content.split(args.TargetContent).join(args.ReplacementContent);
                                    } else {
                                        content = content.replace(args.TargetContent, args.ReplacementContent);
                                    }
                                    fileStates[args.TargetFile] = content;
                                    console.log(`[replace_file_content] ${args.TargetFile}`);
                                } else {
                                    console.warn(`[!] TargetContent not found in ${args.TargetFile}`);
                                }
                            }
                        }
                    } else if (call.name === 'multi_replace_file_content') {
                        const args = call.args;
                        if (args && args.TargetFile && args.ReplacementChunks) {
                            let content = fileStates[args.TargetFile];
                            if (content) {
                                for (const chunk of args.ReplacementChunks) {
                                    if (content.includes(chunk.TargetContent)) {
                                        if (chunk.AllowMultiple) {
                                            content = content.split(chunk.TargetContent).join(chunk.ReplacementContent);
                                        } else {
                                            content = content.replace(chunk.TargetContent, chunk.ReplacementContent);
                                        }
                                        console.log(`[multi_replace_file_content chunk] ${args.TargetFile}`);
                                    } else {
                                        console.warn(`[!] TargetContent not found for multi chunk in ${args.TargetFile}`);
                                    }
                                }
                                fileStates[args.TargetFile] = content;
                            }
                        }
                    }
                }
            }
        } catch (e) {
            console.error('Error parsing line:', e);
        }
    }

    console.log('--- RECONSTRUCTED STATE ---');
    for (const [filepath, content] of Object.entries(fileStates)) {
        if (!filepath.includes('BB1_Web')) continue; // only restore project files
        
        // Fix up paths to ensure they match current directory if they are relative
        const destPath = filepath; 
        const dir = path.dirname(destPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        // Don't overwrite if it exists and we're not sure, but user said they deleted them
        fs.writeFileSync(destPath, content);
        console.log(`Restored: ${destPath} (${content.length} bytes)`);
    }
}

recover().catch(console.error);
