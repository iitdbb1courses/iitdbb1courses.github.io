/**
 * courseContent.js  —  Course Detail Content
 * ═══════════════════════════════════════════════════════════
 *
 * ✅ HOW TO UPDATE (no coding needed):
 *   1. Open this file in any text editor (Notepad, VS Code, etc.)
 *   2. Find the course code you want to update, e.g.  "BBL131"
 *   3. Edit description, topics, textbooks, etc.
 *   4. Save  →  refresh the browser  →  changes appear instantly.
 *
 * ✅ HOW TO ADD A NEW COURSE:
 *   Copy the template below and paste it inside the object:
 *
 *   "COURSE_CODE": {
 *     description:   "Write a short description of the course.",
 *     objectives:    "What will students learn / be able to do.",
 *     topics:        ["Topic 1", "Topic 2", "Topic 3"],
 *     textbooks:     ["Author — Title (Edition, Publisher)"],
 *     prerequisites: "Previous course name or None"
 *   },
 *
 * NOTE: Keep the trailing comma after each course block.
 *       Strings must be inside "double quotes".
 *       Lists must be inside [ square brackets ].
 * ═══════════════════════════════════════════════════════════
 */

window.COURSE_CONTENT = {

  /* ─────────────────────────────────────────────────────
     SEMESTER III  (Common to both curricula)
  ───────────────────────────────────────────────────── */

  "MLL100": {
    description: "An introductory course covering the fundamental concepts of materials science and engineering — atomic structure, bonding, crystal structures, and the relationship between microstructure and the mechanical, electrical, and thermal properties of metals, ceramics, polymers, and composites.",
    objectives:  "To understand structure-property relationships in engineering materials and apply material selection principles to engineering design problems.",
    topics: [
      "Atomic structure and interatomic bonding",
      "Crystal structures and crystallographic directions",
      "Imperfections in solids — point, line, planar defects",
      "Diffusion in solids",
      "Mechanical properties — stress, strain, elasticity, plasticity",
      "Dislocations and strengthening mechanisms",
      "Phase diagrams and phase transformations",
      "Metals and alloys",
      "Ceramics — structure and properties",
      "Polymers and composites",
      "Electrical, thermal, and optical properties",
      "Corrosion and degradation",
      "Biomaterials — introduction"
    ],
    textbooks: [
      "Callister W.D. & Rethwisch D.G. — Materials Science and Engineering: An Introduction (10th Ed., Wiley)",
      "Shackelford J.F. — Introduction to Materials Science for Engineers (8th Ed., Pearson)"
    ],
    prerequisites: "Physics I & II (Semester I/II)"
  },

  "CLL110": {
    description: "A unified treatment of momentum, energy, and mass transport using shell balances, vector equations, and boundary-layer theory. Bridges fluid mechanics, heat transfer, and mass transfer in a single mathematical framework essential for chemical and biochemical engineering.",
    objectives: "To develop proficiency in formulating and solving transport problems in laminar and turbulent flow regimes.",
    topics: [
      "Viscosity and mechanism of momentum transport",
      "Shell momentum balances — velocity distributions in laminar flow",
      "Equations of change for isothermal systems (Navier-Stokes)",
      "Velocity distributions with more than one independent variable",
      "Thermal conductivity and energy transport mechanisms",
      "Shell energy balances — temperature distributions",
      "Equations of change for non-isothermal systems",
      "Diffusivity and mechanism of mass transport",
      "Shell mass balances — concentration distributions",
      "Equations of change for multicomponent systems",
      "Interphase transport: friction factors, heat and mass transfer coefficients"
    ],
    textbooks: [
      "Bird R.B., Stewart W.E., Lightfoot E.N. — Transport Phenomena (2nd Ed., Wiley)",
      "Welty J. et al. — Fundamentals of Momentum, Heat and Mass Transfer (6th Ed., Wiley)"
    ],
    prerequisites: "Fluid Mechanics basics, Mathematics I & II"
  },

  "SBL100": {
    description: "An introductory biology course designed for engineering students. Covers the fundamental concepts of molecular and cell biology, genetics, and biotechnology with emphasis on applications relevant to biochemical and biomedical engineering.",
    objectives: "To provide engineering students with a strong biological foundation required for advanced courses in biochemical engineering and biotechnology.",
    topics: [
      "Origin and diversity of life — domains of life",
      "Cell structure — prokaryotes vs eukaryotes",
      "Biological macromolecules — proteins, nucleic acids, carbohydrates, lipids",
      "Cell membrane structure and transport",
      "Cellular metabolism — glycolysis, TCA cycle, oxidative phosphorylation",
      "DNA replication, transcription, and translation",
      "Gene regulation — operon model",
      "Cell division — mitosis and meiosis",
      "Mendelian and molecular genetics",
      "Introduction to genetic engineering and CRISPR"
    ],
    textbooks: [
      "Campbell N.A. & Reece J.B. — Biology (11th Ed., Pearson)",
      "Lewin B. — Cells (2nd Ed., Jones & Bartlett)"
    ],
    prerequisites: "None"
  },

  "BBL101": {
    description: "A comprehensive introduction to biochemistry designed for the revised 2025+ curriculum. Covers the chemistry of biological macromolecules, enzyme catalysis, and major metabolic pathways, with emphasis on engineering applications in bioprocess systems.",
    objectives: "To establish a strong biochemical foundation for subsequent bioprocess engineering courses by understanding the molecular basis of life processes.",
    topics: [
      "Amino acids — structure, classification, ionisation",
      "Protein structure — primary to quaternary; folding and denaturation",
      "Enzymes — classification, mechanisms, Michaelis-Menten kinetics",
      "Enzyme inhibition — competitive, non-competitive, uncompetitive",
      "Carbohydrates — monosaccharides, disaccharides, polysaccharides",
      "Glycolysis and gluconeogenesis",
      "TCA cycle and oxidative phosphorylation",
      "Lipid structure and membrane biochemistry",
      "Nucleic acid structure and function",
      "Vitamins, coenzymes, and metabolic regulation"
    ],
    textbooks: [
      "Lehninger A.L., Nelson D.L., Cox M.M. — Principles of Biochemistry (8th Ed., Freeman)",
      "Stryer L. — Biochemistry (9th Ed., Freeman)"
    ],
    prerequisites: "Chemistry (Semester I/II)"
  },

  "BBL131": {
    description: "A comprehensive introduction to the chemistry and biology of living systems. Covers the structure and function of biological macromolecules, enzyme kinetics, and major metabolic pathways that sustain cellular life.",
    objectives: "To understand the molecular basis of biochemical processes and apply this knowledge to engineering biological systems.",
    topics: [
      "Amino acids — structure, classification, properties",
      "Protein structure — primary to quaternary",
      "Enzymes — classification, kinetics (Michaelis-Menten), inhibition",
      "Carbohydrates — monosaccharides, polysaccharides, glycolysis",
      "Lipids — fatty acids, membranes, lipid metabolism",
      "Nucleic acids — DNA and RNA structure",
      "Vitamins and coenzymes",
      "TCA cycle and electron transport chain",
      "Regulation of metabolism"
    ],
    textbooks: [
      "Lehninger A.L., Nelson D.L., Cox M.M. — Principles of Biochemistry (7th Ed., Freeman)",
      "Stryer L. — Biochemistry (8th Ed., Freeman)",
      "Harper's Illustrated Biochemistry (30th Ed., McGraw-Hill)"
    ],
    prerequisites: "Basic Chemistry (Semester I/II)"
  },

  "BBL102": {
    description: "A comprehensive study of microorganisms — bacteria, archaea, fungi, and viruses — covering their diversity, physiology, genetics, ecology, and applications in biotechnology and industry.",
    objectives: "To provide a thorough grounding in microbiology for applications in bioprocess engineering, industrial fermentation, and environmental biotechnology.",
    topics: [
      "History and scope of microbiology",
      "Prokaryotic cell structure and function",
      "Eukaryotic microorganisms — fungi, algae, protozoa",
      "Viruses — structure, replication, classification",
      "Microbial nutrition and growth kinetics",
      "Microbial metabolism and energy generation",
      "Microbial genetics — mutations and gene transfer",
      "Control of microbial growth — physical and chemical",
      "Sterilisation and aseptic technique",
      "Industrial and environmental microbiology"
    ],
    textbooks: [
      "Tortora G.J. et al. — Microbiology: An Introduction (13th Ed., Pearson)",
      "Madigan M.T. et al. — Brock Biology of Microorganisms (15th Ed., Pearson)"
    ],
    prerequisites: "None"
  },

  "BBL132": {
    description: "An introductory course on the study of microorganisms, covering their structure, physiology, genetics, ecology, and applications in biotechnology and medicine.",
    objectives: "To develop a thorough understanding of microbial diversity, growth kinetics, and the role of microorganisms in industrial and environmental processes.",
    topics: [
      "Microbial diversity — bacteria, archaea, fungi, viruses",
      "Prokaryotic cell structure and function",
      "Eukaryotic microorganisms",
      "Microbial nutrition and growth",
      "Microbial metabolism — energy generation pathways",
      "Microbial genetics — mutations and gene transfer",
      "Control of microbial growth",
      "Industrial microbiology applications",
      "Sterilisation and aseptic techniques"
    ],
    textbooks: [
      "Tortora G.J. et al. — Microbiology: An Introduction (13th Ed., Pearson)",
      "Madigan M.T. et al. — Brock Biology of Microorganisms (15th Ed., Pearson)"
    ],
    prerequisites: "None"
  },

  "BBL133": {
    description: "Application of material and energy balance principles to biochemical and bioprocess systems. Covers stoichiometry, thermodynamics of biological reactions, and balances applied to bioreactors, fermenters, and cell growth.",
    objectives: "To apply conservation of mass and energy principles to solve problems in bioprocess engineering.",
    topics: [
      "Units, dimensions, and process variables",
      "Material balances — steady state and unsteady state",
      "Stoichiometry of biochemical reactions",
      "Cell stoichiometry and yield coefficients",
      "Energy balances — enthalpy and heat of reaction",
      "Combustion and calorific values of biomass",
      "Bioreactor material balances — batch, fed-batch, continuous",
      "Application to cell growth and product formation",
      "Process flowsheets and block diagrams"
    ],
    textbooks: [
      "Shuler M.L. & Kargi F. — Bioprocess Engineering: Basic Concepts (2nd Ed., Prentice Hall)",
      "Felder R.M. & Rousseau R.W. — Elementary Principles of Chemical Processes (4th Ed., Wiley)"
    ],
    prerequisites: "Mathematics, Basic Chemistry"
  },

  "MAL201": {
    description: "A course in probability theory and statistics with applications in engineering data analysis, quality control, and experimental design. Includes random variables, common distributions, estimation, hypothesis testing, and regression analysis.",
    objectives: "To apply probabilistic and statistical methods to engineering problems including process control and experimental data analysis.",
    topics: [
      "Probability theory — sample spaces, events, axioms",
      "Conditional probability and Bayes' theorem",
      "Random variables — discrete and continuous",
      "Distributions — Binomial, Poisson, Normal, Exponential",
      "Expectation, variance, and moments",
      "Joint distributions and correlations",
      "Central limit theorem",
      "Statistical inference — point and interval estimation",
      "Hypothesis testing — t-test, chi-square, ANOVA",
      "Linear regression and correlation",
      "Design of experiments — factorial designs"
    ],
    textbooks: [
      "Walpole R.E. et al. — Probability and Statistics for Engineers and Scientists (9th Ed., Pearson)",
      "Montgomery D.C. — Applied Statistics and Probability for Engineers (6th Ed., Wiley)"
    ],
    prerequisites: "MTL100, MTL101 (Mathematics I & II)"
  },

  "HUL201": {
    description: "A practical course in technical and scientific writing for engineers. Covers writing laboratory reports, research articles, project proposals, and professional emails. Emphasises clarity, precision, and effective visual communication.",
    objectives: "To develop written and oral communication skills essential for a successful engineering career.",
    topics: [
      "Technical writing process — planning, drafting, revising",
      "Sentences, paragraphs, and document structure",
      "Laboratory and project reports",
      "Research paper writing — IMRaD structure",
      "Technical proposals and specifications",
      "Visual communication — graphs, tables, figures",
      "Oral presentations and conference posters",
      "Professional emails and correspondence",
      "Avoiding plagiarism and research ethics"
    ],
    textbooks: [
      "Beer D. & McMurrey D. — A Guide to Writing as an Engineer (4th Ed., Wiley)",
      "Alley M. — The Craft of Scientific Writing (3rd Ed., Springer)"
    ],
    prerequisites: "None"
  },

  /* ─────────────────────────────────────────────────────
     SEMESTER IV
  ───────────────────────────────────────────────────── */

  "CLL251": {
    description: "Study of heat transfer mechanisms — conduction, convection, and radiation — with applications to chemical process equipment design. Includes steady-state and transient conduction, forced and natural convection, and heat exchanger design.",
    objectives: "To design and analyse heat transfer equipment commonly used in chemical and biochemical process plants.",
    topics: [
      "Modes of heat transfer — conduction, convection, radiation",
      "Steady-state 1D conduction — flat walls, cylinders",
      "Transient conduction — lumped capacity, Biot number",
      "Forced convection — internal and external flow correlations",
      "Natural convection — vertical and horizontal surfaces",
      "Radiation — blackbody, grey body, view factors",
      "Boiling and condensation",
      "Heat exchangers — LMTD and NTU-ε methods",
      "Design of shell-and-tube heat exchangers"
    ],
    textbooks: [
      "Incropera F.P. et al. — Fundamentals of Heat and Mass Transfer (7th Ed., Wiley)",
      "Cengel Y.A. — Heat Transfer: A Practical Approach (2nd Ed., McGraw-Hill)"
    ],
    prerequisites: "CLL110 (Transport Phenomena)"
  },

  "CLL122": {
    description: "Principles of chemical kinetics and catalysis applied to the design and analysis of ideal and non-ideal chemical reactors. Covers rate laws, ideal reactors (batch, CSTR, PFR), multiple reactions, and temperature effects.",
    objectives: "To design and optimise chemical and biochemical reactors using principles of reaction kinetics and material balances.",
    topics: [
      "Review of chemical kinetics — rate laws, order, Arrhenius",
      "Ideal batch reactor — design equation and analysis",
      "Ideal CSTR — conversion and space time",
      "Ideal PFR — conversion and design",
      "Multiple reactions — selectivity and yield optimisation",
      "Bioreactor models — Monod kinetics",
      "Non-elementary reactions and catalysis mechanisms",
      "Heterogeneous catalysis — Langmuir-Hinshelwood",
      "Energy balance on reactors — adiabatic and non-adiabatic"
    ],
    textbooks: [
      "Fogler H.S. — Elements of Chemical Reaction Engineering (5th Ed., Prentice Hall)",
      "Levenspiel O. — Chemical Reaction Engineering (3rd Ed., Wiley)"
    ],
    prerequisites: "Mathematics, Physical Chemistry"
  },

  "CLL211": {
    description: "Fundamentals of chemical reaction engineering covering ideal and non-ideal reactor design, kinetics, and reactor optimisation for single and multiple reactions in chemical and biochemical processes.",
    objectives: "To design and optimise chemical and biochemical reactors at industrial scale.",
    topics: [
      "Chemical kinetics review — rate laws, Arrhenius",
      "Ideal batch reactor design",
      "CSTR design and performance",
      "PFR design and performance",
      "Multiple reactions — selectivity maximisation",
      "Non-ideal flow — RTD, dispersion models",
      "Temperature effects on reactor performance",
      "Bioreactor kinetics — Monod model"
    ],
    textbooks: [
      "Fogler H.S. — Elements of Chemical Reaction Engineering (5th Ed.)",
      "Levenspiel O. — Chemical Reaction Engineering (3rd Ed.)"
    ],
    prerequisites: "Mathematics, Physical Chemistry"
  },

  "CLL212": {
    description: "Classical thermodynamics applied to chemical and biological systems. Covers the laws of thermodynamics, equations of state, thermodynamic properties, phase equilibria, and chemical reaction equilibria.",
    objectives: "To apply thermodynamic principles to chemical and biochemical processes and phase equilibria calculations.",
    topics: [
      "First and second laws of thermodynamics",
      "PVT relationships and equations of state",
      "Thermodynamic properties of pure substances",
      "Solution thermodynamics — fugacity and activity coefficients",
      "Phase equilibria — vapour-liquid equilibria (VLE)",
      "Liquid-liquid equilibria",
      "Chemical reaction equilibria",
      "Thermodynamics of biological systems"
    ],
    textbooks: [
      "Smith J.M. et al. — Introduction to Chemical Engineering Thermodynamics (8th Ed., McGraw-Hill)",
      "Prausnitz J.M. — Molecular Thermodynamics of Fluid Phase Equilibria (3rd Ed., Prentice Hall)"
    ],
    prerequisites: "Mathematics, Physical Chemistry"
  },

  "CLL231": {
    description: "Fundamentals of fluid mechanics with emphasis on Newtonian and non-Newtonian flow. Topics include fluid statics, integral and differential equations of motion, boundary layers, pipe flow, pumps, and flow measurement.",
    objectives: "To analyse and design fluid flow systems encountered in chemical and biochemical process plants.",
    topics: [
      "Fluid properties — viscosity, surface tension",
      "Fluid statics — pressure distribution, manometry",
      "Continuity equation — integral and differential forms",
      "Bernoulli equation and applications",
      "Momentum balance — Reynolds Transport Theorem",
      "Viscous flow in pipes — Hagen-Poiseuille, friction factor",
      "Moody diagram and pipe network analysis",
      "Boundary-layer theory — laminar and turbulent",
      "Flow measurement — orifice, venturi, rotameter",
      "Centrifugal pumps — characteristic curves, NPSH",
      "Non-Newtonian fluids — power-law, Bingham plastic"
    ],
    textbooks: [
      "Munson B.R. et al. — Fundamentals of Fluid Mechanics (8th Ed., Wiley)",
      "McCabe W.L. & Smith J.C. — Unit Operations of Chemical Engineering (7th Ed.)"
    ],
    prerequisites: "CLL110 (Transport Phenomena)"
  },

  "CVL100": {
    description: "An overview of environmental science and engineering covering air, water, and soil pollution; ecology; sustainability; and pollution control technologies. Introduces Indian and global environmental legislation.",
    objectives: "To understand environmental problems, their causes, and engineering solutions for environmental protection and sustainable development.",
    topics: [
      "Environmental systems — biosphere, atmosphere, hydrosphere",
      "Ecology and ecosystems — energy flow, nutrient cycles",
      "Water resources — quality, treatment, distribution",
      "Air quality and atmospheric pollution — control technologies",
      "Solid and hazardous waste management",
      "Soil pollution and bioremediation",
      "Environmental impact assessment (EIA)",
      "Green chemistry and sustainable development",
      "Indian environmental legislation — EPA, Water Act, Air Act"
    ],
    textbooks: [
      "Botkin D.B. & Keller E.A. — Environmental Science: Earth as a Living Planet (9th Ed.)",
      "Masters G.M. — Introduction to Environmental Engineering and Science (2nd Ed.)"
    ],
    prerequisites: "None"
  },

  "MTL102": {
    description: "A course on ordinary and partial differential equations with engineering applications. Topics include first-order and higher-order ODEs, systems of ODEs, Laplace transforms, Fourier series, and an introduction to PDEs.",
    objectives: "To develop mathematical skills for modelling and solving differential equation problems in engineering contexts.",
    topics: [
      "First-order ODEs — separable, linear, exact, Bernoulli",
      "Second-order linear ODEs — homogeneous and non-homogeneous",
      "Power series solutions — Frobenius method",
      "Systems of first-order linear ODEs",
      "Laplace transforms and inverse Laplace",
      "Application of Laplace transform to solve ODEs",
      "Fourier series and Fourier transforms",
      "PDEs — wave equation, heat equation, Laplace equation",
      "Numerical methods for ODEs — Euler and Runge-Kutta"
    ],
    textbooks: [
      "Kreyszig E. — Advanced Engineering Mathematics (10th Ed., Wiley)",
      "Simmons G.F. — Differential Equations with Applications and Historical Notes (3rd Ed.)"
    ],
    prerequisites: "MTL100 (Mathematics I)"
  },

  "MAL202": {
    description: "Numerical methods for solving engineering problems computationally — covers roots of equations, linear systems, interpolation, numerical integration, and ODE solvers, with programming applications in MATLAB or Python.",
    objectives: "To implement numerical algorithms for solving engineering problems using computational tools.",
    topics: [
      "Round-off errors and numerical stability",
      "Roots of nonlinear equations — bisection, Newton-Raphson",
      "Systems of linear equations — Gaussian elimination, LU decomposition",
      "Eigenvalue problems",
      "Interpolation — Lagrange, Newton's divided differences",
      "Curve fitting — least squares regression",
      "Numerical integration — Simpson's rule, Gauss quadrature",
      "Numerical differentiation",
      "ODE solvers — Euler, Runge-Kutta, multistep methods",
      "Introduction to MATLAB/Python for numerical computing"
    ],
    textbooks: [
      "Chapra S.C. & Canale R.P. — Numerical Methods for Engineers (7th Ed., McGraw-Hill)",
      "Atkinson K. & Han W. — Elementary Numerical Analysis (3rd Ed.)"
    ],
    prerequisites: "MTL100, MTL102"
  },

  /* ─────────────────────────────────────────────────────
     SEMESTER V
  ───────────────────────────────────────────────────── */

  "BBL231": {
    description: "Study of the molecular basis of genetics and gene expression in prokaryotes and eukaryotes. Covers DNA replication, repair, RNA synthesis, protein synthesis, gene regulation, and modern molecular biology techniques.",
    objectives: "To understand the molecular mechanisms of genetic information flow and apply recombinant DNA techniques to biotechnology.",
    topics: [
      "DNA structure — Watson-Crick model, Z-DNA, cruciform",
      "DNA replication — mechanisms in prokaryotes and eukaryotes",
      "DNA repair — BER, NER, mismatch repair",
      "Transcription — RNA polymerase, promoters, terminators",
      "Post-transcriptional processing — splicing, capping, polyadenylation",
      "Translation — ribosomes, tRNA charging, genetic code",
      "Gene regulation in prokaryotes — lac and trp operons",
      "Gene regulation in eukaryotes — chromatin, enhancers",
      "Recombinant DNA technology — restriction enzymes, PCR, cloning",
      "Genome sequencing and bioinformatics basics"
    ],
    textbooks: [
      "Lewin B. — Genes XII (Jones & Bartlett)",
      "Lodish H. et al. — Molecular Cell Biology (8th Ed., Freeman)",
      "Alberts B. et al. — Molecular Biology of the Cell (6th Ed., Garland)"
    ],
    prerequisites: "BBL131, BBL132"
  },

  "BBL201": {
    description: "Molecular biology and genetics for the 2025+ curriculum — covers DNA replication, gene expression, regulation, genome editing tools, and modern molecular biology techniques with an emphasis on engineering applications.",
    objectives: "To understand the molecular basis of heredity and apply molecular biology techniques to solve engineering problems.",
    topics: [
      "DNA structure and replication mechanisms",
      "Transcription and RNA processing",
      "Translation and the genetic code",
      "Gene regulation in prokaryotes and eukaryotes",
      "Mutations and DNA repair",
      "Recombinant DNA — restriction enzymes, cloning vectors",
      "PCR, gel electrophoresis, Southern/Northern blotting",
      "Genomics and CRISPR-Cas9 basics"
    ],
    textbooks: [
      "Lewin B. — Genes XII (Jones & Bartlett)",
      "Alberts B. et al. — Molecular Biology of the Cell (6th Ed., Garland)"
    ],
    prerequisites: "BBL101, BBL102"
  },

  "BBL202": {
    description: "Comprehensive study of eukaryotic cell structure, function, and signalling with applications in cell culture technology and biopharmaceutical production.",
    objectives: "To understand cellular processes and apply this knowledge to animal and plant cell culture technologies.",
    topics: [
      "Cell membranes — structure, transport, signalling receptors",
      "Cytoskeleton and cell mechanics",
      "Intracellular trafficking and vesicle transport",
      "Cell cycle regulation and checkpoints",
      "Signal transduction pathways",
      "Apoptosis and programmed cell death",
      "Stem cells and differentiation",
      "Animal cell culture techniques",
      "Applications in biopharmaceutical production"
    ],
    textbooks: [
      "Alberts B. et al. — Molecular Biology of the Cell (6th Ed., Garland)",
      "Lodish H. et al. — Molecular Cell Biology (8th Ed., Freeman)"
    ],
    prerequisites: "BBL101"
  },

  "BBL203": {
    description: "First course in bioprocess engineering — microbial and cell culture kinetics, bioreactor types, and mass and energy balances. Establishes the foundation for bioreactor design and scale-up.",
    objectives: "To establish the foundations of bioprocess design including growth kinetics, yield coefficients, and basic bioreactor analysis.",
    topics: [
      "Stoichiometry of cell growth and product formation",
      "Growth kinetics — Monod model and extensions",
      "Batch bioreactor analysis",
      "Fed-batch and continuous (chemostat) bioreactor analysis",
      "Oxygen transfer — kLa measurement and scale-up",
      "Mass balances on bioreactors",
      "Energy balances on bioreactors",
      "Introduction to bioreactor types"
    ],
    textbooks: [
      "Shuler M.L. & Kargi F. — Bioprocess Engineering: Basic Concepts (2nd Ed., Prentice Hall)",
      "Doran P.M. — Bioprocess Engineering Principles (2nd Ed., Academic Press)"
    ],
    prerequisites: "BBL133 or equivalent, BBL101"
  },

  "CLL252": {
    description: "Principles and applications of mass transfer operations — diffusion, interphase mass transfer, and design of industrial separation equipment including absorption, distillation, and liquid-liquid extraction columns.",
    objectives: "To design and analyse mass transfer equipment used in separation processes in chemical and biochemical industries.",
    topics: [
      "Molecular diffusion in gases and liquids — Fick's law",
      "Diffusivity estimation — Wilke-Chang, Chapman-Enskog",
      "Mass transfer coefficients — individual and overall",
      "Penetration and surface renewal theories",
      "Gas absorption — packed columns, Kremser equation",
      "Distillation — VLE, McCabe-Thiele method",
      "Liquid-liquid extraction — equilibria and extraction factor",
      "Leaching — basic principles",
      "Membrane-based separation"
    ],
    textbooks: [
      "Treybal R.E. — Mass Transfer Operations (3rd Ed., McGraw-Hill)",
      "McCabe W.L. & Smith J.C. — Unit Operations of Chemical Engineering (7th Ed.)"
    ],
    prerequisites: "CLL110, CLL231"
  },

  "CLL261": {
    description: "Analysis and design of feedback control systems for chemical processes. Topics include process modelling, Laplace transforms, transfer functions, stability analysis, and PID controller tuning.",
    objectives: "To design and tune feedback controllers for maintaining process variables at desired setpoints in chemical and biochemical plants.",
    topics: [
      "Introduction to process control and instrumentation",
      "Mathematical modelling of process systems",
      "Laplace transform and transfer functions",
      "First-order and second-order system response",
      "Feedback control — P, PI, PID controllers",
      "Stability analysis — Bode plots, Routh-Hurwitz criterion",
      "Frequency response analysis",
      "Controller tuning — Ziegler-Nichols, IMC method",
      "Cascade and feedforward control strategies",
      "Introduction to distributed control systems (DCS)"
    ],
    textbooks: [
      "Coughanowr D.R. & LeBlanc S.E. — Process Systems Analysis and Control (3rd Ed., McGraw-Hill)",
      "Seborg D.E. et al. — Process Dynamics and Control (4th Ed., Wiley)"
    ],
    prerequisites: "MTL102, CLL110"
  },

  "BBL301": {
    description: "Advanced bioprocess engineering — fed-batch and continuous processes, scale-up of bioreactors, high-density culture, and process analytical technology (PAT). Second course in the bioprocess engineering sequence.",
    objectives: "To design and optimise industrial-scale bioreactors and bioprocess systems including fed-batch and continuous operations.",
    topics: [
      "Fed-batch bioreactor analysis and optimisation strategies",
      "Continuous bioreactor — chemostat theory and stability",
      "Scale-up principles — kLa, mixing time, power consumption",
      "Animal cell bioreactors — perfusion systems",
      "High-density cell culture",
      "Process analytical technology (PAT) and sensors",
      "Economic analysis and process design considerations",
      "Regulatory requirements for biopharmaceuticals"
    ],
    textbooks: [
      "Doran P.M. — Bioprocess Engineering Principles (2nd Ed., Academic Press)",
      "Shuler M.L. & Kargi F. — Bioprocess Engineering (2nd Ed.)"
    ],
    prerequisites: "BBL203"
  },

  "BBL302": {
    description: "Principles and techniques for downstream processing and bioseparation of bioproducts including proteins, nucleic acids, and small molecules from fermentation broths.",
    objectives: "To design downstream processing trains for biopharmaceutical and industrial biotechnology products meeting purity requirements.",
    topics: [
      "Overview of downstream processing — product classes, regulatory standards",
      "Primary recovery — centrifugation, microfiltration",
      "Cell disruption — mechanical, enzymatic, chemical",
      "Precipitation — salting-out, isoelectric focusing",
      "Chromatography — ion exchange, affinity, SEC, HIC",
      "Membrane-based separations — UF, NF, dialysis",
      "Aqueous two-phase extraction",
      "Formulation and drying of biologics",
      "Scale-up and process development for purification"
    ],
    textbooks: [
      "Harrison R.G. et al. — Bioseparations Science and Engineering (2nd Ed., Oxford)",
      "Wheelwright S.M. — Protein Purification (Hanser)"
    ],
    prerequisites: "BBL203, CLL252 (or equivalent)"
  },

  "BBL303": {
    description: "Advanced enzyme engineering covering enzyme structure-function relationships, directed evolution, immobilisation, and industrial biocatalysis applications.",
    objectives: "To design and implement enzyme-based biocatalytic processes for industrial applications in pharmaceuticals, food, and biofuels.",
    topics: [
      "Enzyme structure and catalytic mechanisms",
      "Advanced enzyme kinetics — multi-substrate, allosteric",
      "Protein engineering — rational design and directed evolution",
      "High-throughput screening for enzyme variants",
      "Enzyme immobilisation — methods and support materials",
      "Kinetics of immobilised enzymes — diffusion limitations",
      "Industrial biocatalysis case studies",
      "Cofactor engineering and regeneration",
      "Application in pharmaceuticals, food processing, biofuels"
    ],
    textbooks: [
      "Faber K. — Biotransformations in Organic Chemistry (6th Ed., Springer)",
      "Bommarius A.S. & Riebel B.R. — Biocatalysis (Wiley-VCH)"
    ],
    prerequisites: "BBL131 or BBL101, BBL201"
  },

  "BBL304": {
    description: "Introduction to immunology covering innate and adaptive immunity, antibody structure and function, vaccines, and immunotherapies relevant to biotechnology and biopharmaceutical development.",
    objectives: "To understand the immune system and apply immunological principles to vaccine development and immunotherapy design.",
    topics: [
      "Overview of the immune system — innate and adaptive",
      "Innate immunity — physical barriers, complement, phagocytosis",
      "Adaptive immunity — T and B lymphocytes, clonal selection",
      "Antibody structure, function, and isotypes",
      "MHC molecules and antigen presentation",
      "Hypersensitivity reactions — Type I–IV",
      "Autoimmunity and immunodeficiency",
      "Vaccines — types, adjuvants, development",
      "Monoclonal antibody production (hybridoma, recombinant)",
      "Immunotherapy — CAR-T cells, checkpoint inhibitors, ADCs"
    ],
    textbooks: [
      "Abbas A.K. et al. — Cellular and Molecular Immunology (9th Ed., Saunders)",
      "Murphy K. — Janeway's Immunobiology (9th Ed., Garland)"
    ],
    prerequisites: "BBL101, BBL201"
  },

  "BBL331": {
    description: "Principles of bioprocess engineering applied to the design and operation of biological reactors. Covers microbial kinetics, bioreactor types, aeration, agitation, heat transfer, scale-up, and economic aspects of bioprocess design.",
    objectives: "To design and optimise bioreactors for microbial and cell culture processes in the industrial biotechnology sector.",
    topics: [
      "Microbial growth kinetics — Monod model and extensions",
      "Batch, fed-batch, and continuous bioreactor modes",
      "Yield and maintenance coefficients",
      "Oxygen transfer — kLa and its measurement",
      "Agitation and mixing — power consumption",
      "Heat transfer in bioreactors",
      "Scale-up principles — geometric and dynamic similarity",
      "Animal cell culture reactors",
      "Immobilised cell and enzyme reactors",
      "Techno-economic analysis of bioprocesses"
    ],
    textbooks: [
      "Shuler M.L. & Kargi F. — Bioprocess Engineering: Basic Concepts (2nd Ed.)",
      "Doran P.M. — Bioprocess Engineering Principles (2nd Ed., Academic Press)"
    ],
    prerequisites: "BBL133, BBL132"
  },

  "CLP301": {
    description: "Laboratory course providing hands-on experience with standard chemical engineering operations. Experiments cover fluid mechanics, heat transfer, mass transfer, and reactor engineering, reinforcing theory with practical skills.",
    objectives: "To apply theoretical knowledge through laboratory experiments and develop data analysis and technical report-writing skills.",
    topics: [
      "Flow through packed beds — Ergun equation verification",
      "Centrifugal pump characteristics and cavitation",
      "Shell-and-tube heat exchanger performance",
      "Batch distillation experiment",
      "CSTR and PFR performance comparison",
      "Absorption column efficiency",
      "Fluidised bed experiments",
      "Technical report writing and data analysis"
    ],
    textbooks: [
      "Laboratory Manual — CLP301 (Dept. of Chemical Engineering, IIT Delhi)"
    ],
    prerequisites: "CLL110, CLL231"
  },

  "BBP332": {
    description: "Laboratory training in core bioprocess techniques — microbial cultivation, bioreactor operation, sterile techniques, and analysis of fermentation parameters. Experiments reinforce concepts from BBL331.",
    objectives: "To develop practical skills in running bioprocesses, operating bioreactors, and measuring and interpreting process variables.",
    topics: [
      "Sterilisation techniques — autoclave, membrane filtration",
      "Microbial growth measurement — OD, cell dry weight, viable count",
      "Batch fermentation — growth curve and kinetics",
      "Fed-batch fermentation operation",
      "Dissolved oxygen and pH monitoring and control",
      "HPLC analysis of fermentation substrates and products",
      "Scale-up considerations — laboratory bioreactor experiments",
      "Data analysis and technical report writing"
    ],
    textbooks: [
      "Laboratory Manual — BBP332 (Dept. of Biochemical Engineering, IIT Delhi)"
    ],
    prerequisites: "BBL132, BBL133"
  },

  /* ─────────────────────────────────────────────────────
     SEMESTER VI
  ───────────────────────────────────────────────────── */

  "CLP302": {
    description: "Advanced laboratory course in chemical engineering covering experiments on mass transfer, reaction engineering, and process control. Students design experiments and interpret results independently.",
    objectives: "To consolidate unit operations knowledge through advanced experimental work and independent analysis and reporting.",
    topics: [
      "Liquid-liquid extraction column performance",
      "Packed column absorption efficiency",
      "Continuous reactor (CSTR) design experiment",
      "Heat exchanger network experiment",
      "Membrane separation experiment",
      "PID controller tuning experiment",
      "Independent research-level experiment"
    ],
    textbooks: [
      "Laboratory Manual — CLP302 (Dept. of Chemical Engineering, IIT Delhi)"
    ],
    prerequisites: "CLP301"
  },

  "BBL401": {
    description: "Comprehensive course on recombinant DNA technology, genetic engineering, and genome editing. Covers expression system design, CRISPR-Cas9, and the production of biopharmaceuticals.",
    objectives: "To design and implement recombinant DNA strategies for the production of valuable biological products in research and industry.",
    topics: [
      "Restriction enzymes, ligases, and DNA manipulation tools",
      "Cloning vectors — plasmids, phages, cosmids, BACs",
      "Expression systems — E. coli, yeast (Pichia), CHO cells",
      "Optimising protein production — codon optimisation, promoters",
      "CRISPR-Cas9 and genome editing technologies",
      "Production of biopharmaceuticals — insulin, EPO, monoclonal antibodies",
      "Gene therapy — viral and non-viral vectors",
      "Biosafety and regulatory aspects of GMOs"
    ],
    textbooks: [
      "Brown T.A. — Gene Cloning and DNA Analysis (7th Ed., Wiley-Blackwell)",
      "Primrose S.B. & Twyman R.M. — Principles of Gene Manipulation and Genomics (8th Ed.)"
    ],
    prerequisites: "BBL201"
  },

  "BBL402": {
    description: "Metabolic engineering principles for redesigning cellular metabolism to improve production of chemicals, biofuels, and pharmaceuticals using computational and experimental approaches.",
    objectives: "To apply systems-level analysis and genetic engineering tools to design and optimise microbial cell factories.",
    topics: [
      "Metabolic pathway analysis — stoichiometric matrices",
      "Flux balance analysis (FBA) and genome-scale models",
      "Metabolic control analysis (MCA)",
      "Genetic tools for metabolic engineering",
      "Case studies — ethanol, succinic acid, lysine, 1,3-PDO",
      "Synthetic biology and genetic circuit design",
      "Omics approaches — transcriptomics, metabolomics, proteomics",
      "Strain optimisation — adaptive laboratory evolution"
    ],
    textbooks: [
      "Stephanopoulos G. et al. — Metabolic Engineering: Principles and Methodologies (Academic Press)",
      "Nielsen J. & Keasling J.D. — Engineering Cellular Metabolism (Cell, 2016)"
    ],
    prerequisites: "BBL201, BBL203"
  },

  "BBL403": {
    description: "Bioinformatics and computational biology applied to genomics, proteomics, transcriptomics, and systems biology. Emphasis on practical use of bioinformatics tools, databases, and pipeline development.",
    objectives: "To analyse large-scale biological datasets using computational methods and bioinformatics databases.",
    topics: [
      "Biological sequence databases — NCBI, UniProt, PDB",
      "Pairwise sequence alignment — Needleman-Wunsch, Smith-Waterman",
      "BLAST and database searching strategies",
      "Multiple sequence alignment — ClustalW, MUSCLE",
      "Phylogenetic analysis — NJ, maximum likelihood",
      "Genome assembly and annotation",
      "Transcriptomics — RNA-seq analysis pipeline",
      "Protein structure prediction — homology modelling, AlphaFold",
      "Systems biology and biological network analysis",
      "Machine learning applications in bioinformatics"
    ],
    textbooks: [
      "Mount D.W. — Bioinformatics: Sequence and Genome Analysis (2nd Ed., CSHL Press)",
      "Durbin R. et al. — Biological Sequence Analysis (Cambridge)"
    ],
    prerequisites: "BBL201"
  },

  "BBL404": {
    description: "Food technology and fermentation engineering — covering food preservation, food microbiology, fermented food products, and scale-up of food fermentation processes.",
    objectives: "To understand food processing science and apply fermentation engineering to food and beverage production at industrial scale.",
    topics: [
      "Food composition — carbohydrates, proteins, fats, vitamins",
      "Food preservation — heat, cold, chemical, irradiation",
      "Food microbiology — spoilage organisms and food safety",
      "Fermented beverages — beer brewing, wine making",
      "Dairy fermentation — yogurt, cheese, kefir",
      "Bread and bakery fermentation",
      "Traditional fermented foods — tempeh, idli, kimchi",
      "Food additives — flavours, colours, preservatives (regulatory)",
      "HACCP and quality management systems",
      "Scale-up of food fermentation processes"
    ],
    textbooks: [
      "Jay J.M. et al. — Modern Food Microbiology (7th Ed., Springer)",
      "Bamforth C. — Food, Fermentation and Microorganisms (Wiley-Blackwell)"
    ],
    prerequisites: "BBL132, BBL203"
  },

  "BBL432": {
    description: "Analysis of fluid-solid systems relevant to biochemical engineering — fluidisation, filtration, sedimentation, centrifugation, and drying. Covers theory and equipment design for solid-fluid separation.",
    objectives: "To analyse and design fluid-solid separation and contact equipment used in bioprocess and pharmaceutical industries.",
    topics: [
      "Particle characterisation — size distribution, shape, density",
      "Sedimentation — Stokes' law, hindered settling",
      "Filtration — constant pressure, constant rate, filter media",
      "Centrifugation — disc centrifuge, sigma analysis, scale-up",
      "Fluidisation — minimum fluidisation velocity, bubbling beds",
      "Drying — psychrometrics, drying rate curves",
      "Crystallisation — nucleation and crystal growth",
      "Particle size reduction — comminution laws"
    ],
    textbooks: [
      "McCabe W.L. & Smith J.C. — Unit Operations of Chemical Engineering (7th Ed.)",
      "Coulson J.M. & Richardson J.F. — Chemical Engineering Vol. 2 (5th Ed., Elsevier)"
    ],
    prerequisites: "CLL231, CLL252"
  },

  "BBL433": {
    description: "Introduction to bioinformatics covering computational methods for biological sequence analysis, structural bioinformatics, genomics, and proteomics.",
    objectives: "To apply computational tools and algorithms to analyse biological data and solve problems in genomics, proteomics, and structural biology.",
    topics: [
      "Introduction to bioinformatics — scope and databases",
      "Pairwise sequence alignment",
      "BLAST and database searching",
      "Multiple sequence alignment",
      "Phylogenetic analysis",
      "Protein structure prediction — homology modelling",
      "Molecular dynamics basics",
      "Genome annotation",
      "Transcriptomics basics"
    ],
    textbooks: [
      "Mount D.W. — Bioinformatics (2nd Ed., CSHL Press)",
      "Lesk A.M. — Introduction to Bioinformatics (4th Ed., Oxford)"
    ],
    prerequisites: "BBL231"
  },

  "BBL434": {
    description: "Study of enzyme structure, function, and kinetics with applications to industrial enzyme processes — covering purification, characterisation, immobilisation, and industrial applications.",
    objectives: "To understand enzyme catalysis at the molecular level and design enzyme-based industrial processes.",
    topics: [
      "Enzyme structure and active site architecture",
      "Michaelis-Menten kinetics — derivation and parameters",
      "Enzyme inhibition — competitive, non-competitive, substrate inhibition",
      "Multi-substrate kinetics and ordered mechanisms",
      "Allosteric enzymes and cooperative kinetics",
      "Enzyme purification — chromatographic techniques",
      "Enzyme characterisation — activity, stability, specificity",
      "Enzyme immobilisation — covalent, adsorption, entrapment",
      "Kinetics of immobilised enzymes — diffusion limitations",
      "Industrial applications — food, pharmaceuticals, biofuels"
    ],
    textbooks: [
      "Copeland R.A. — Enzymes: A Practical Introduction (2nd Ed., Wiley)",
      "Palmer T. & Bonner P.L. — Enzymes: Biochemistry, Biotechnology, Clinical Chemistry (2nd Ed.)"
    ],
    prerequisites: "BBL131"
  },

  "BBL435": {
    description: "Overview of industrial bioprocess technology — from upstream fermentation to downstream processing, covering production of antibiotics, amino acids, biopharmaceuticals, and biofuels with regulatory aspects.",
    objectives: "To gain a comprehensive understanding of industrial biotechnology from bioreactor operation to product formulation and regulatory approval.",
    topics: [
      "Overview of biotechnology industries and market",
      "Antibiotic production — penicillin, streptomycin fermentation",
      "Amino acid production — lysine, glutamate",
      "Biopharmaceutical production — insulin, erythropoietin",
      "Biofuels — bioethanol, biobutanol fermentation",
      "Industrial enzyme production",
      "Downstream processing overview",
      "GMP, quality control, and regulatory requirements",
      "Techno-economic analysis of bioprocesses"
    ],
    textbooks: [
      "Stanbury P.F. et al. — Principles of Fermentation Technology (3rd Ed., Elsevier)",
      "Ratledge C. & Kristiansen B. — Basic Biotechnology (3rd Ed., Cambridge)"
    ],
    prerequisites: "BBL331"
  },

  /* ─────────────────────────────────────────────────────
     SEMESTER VII
  ───────────────────────────────────────────────────── */

  "BBL501": {
    description: "Drug delivery systems and pharmaceutical biotechnology — mechanisms of drug absorption, formulation strategies, and bio-based drug delivery technologies including nanoparticles, liposomes, and polymer scaffolds.",
    objectives: "To design drug delivery vehicles and understand pharmacokinetics and biopharmaceutics for therapeutic applications.",
    topics: [
      "Pharmacokinetics — ADME, bioavailability",
      "Oral drug delivery — dosage forms, GI absorption",
      "Parenteral drug delivery — injectables, infusions",
      "Transdermal drug delivery systems",
      "Controlled and sustained release formulations",
      "Nanoparticle-based drug delivery — PLGA, chitosan",
      "Liposomal drug formulations",
      "Delivery of proteins, nucleic acids (siRNA, mRNA)",
      "Targeted drug delivery — antibody-drug conjugates",
      "Regulatory pathway for drug delivery systems"
    ],
    textbooks: [
      "Allen L.V. et al. — Ansel's Pharmaceutical Dosage Forms (10th Ed., Lippincott)",
      "Torchilin V.P. — Nanoparticulates as Drug Carriers (Imperial College Press)"
    ],
    prerequisites: "BBL304"
  },

  "BBL502": {
    description: "Plant biotechnology — covering plant molecular biology, tissue culture, genetic transformation, and applications in crop improvement, secondary metabolite production, and molecular farming.",
    objectives: "To apply biotechnological tools to plant systems for agricultural improvement and industrial production of valuable compounds.",
    topics: [
      "Plant cell and tissue culture — callus, suspension cultures",
      "Somatic embryogenesis and plant regeneration",
      "Agrobacterium-mediated transformation",
      "Biolistics and direct DNA delivery methods",
      "Transgenic plants — Bt crops, herbicide-resistant varieties",
      "Plant secondary metabolites — alkaloids, terpenoids, flavonoids",
      "CRISPR in plant genome engineering",
      "Molecular farming — plant-made pharmaceuticals and vaccines"
    ],
    textbooks: [
      "Slater A. et al. — Plant Biotechnology: The Genetic Manipulation of Plants (2nd Ed., Oxford)",
      "Bhojwani S.S. & Bhojwani S.P. — Plant Tissue Culture: Theory and Practice"
    ],
    prerequisites: "BBL201, BBL401"
  },

  "BBL503": {
    description: "Environmental biotechnology and bioremediation — application of microorganisms and plants to treat environmental pollutants in soil, water, and air. Covers reactor design for bioremediation.",
    objectives: "To design microbial and phytoremediation strategies for contaminated environments and engineer biological wastewater treatment systems.",
    topics: [
      "Microbial degradation of xenobiotics — pathways and kinetics",
      "Bioremediation of petroleum hydrocarbons and heavy metals",
      "Wastewater treatment — activated sludge process, biofilm reactors",
      "Anaerobic digestion and biogas production",
      "Constructed wetlands and phytoremediation",
      "Bioaugmentation and biostimulation strategies",
      "Metagenomics for environmental monitoring",
      "Biosensors for pollutant detection",
      "Life cycle assessment of bioremediation technologies"
    ],
    textbooks: [
      "Rittmann B.E. & McCarty P.L. — Environmental Biotechnology (McGraw-Hill)",
      "Vidali M. — Bioremediation: An Overview (Pure Appl. Chem. Review)"
    ],
    prerequisites: "BBL132, CVL100"
  },

  "BBL731": {
    description: "Principles and techniques of bioseparation engineering for recovery and purification of biomolecules — proteins, nucleic acids, and small molecules. Covers unit operations from cell disruption to final formulation.",
    objectives: "To design and optimise downstream processing trains for bioproducts to meet industrial purity standards and regulatory requirements.",
    topics: [
      "Overview of downstream processing — product classes, purity standards",
      "Cell disruption — high-pressure homogenisation, bead milling",
      "Precipitation — salting-out, isoelectric, PEG",
      "Centrifugation — theory, disc centrifuge, sigma analysis",
      "Filtration — microfiltration, ultrafiltration membranes",
      "Chromatography — ion exchange, affinity, SEC, HIC",
      "HPLC and FPLC systems — design and operation",
      "Aqueous two-phase extraction systems",
      "Membrane dialysis and diafiltration",
      "Crystallisation and lyophilisation of biologics"
    ],
    textbooks: [
      "Harrison R.G. et al. — Bioseparations Science and Engineering (2nd Ed., Oxford)",
      "Wheelwright S.M. — Protein Purification: Design and Scale-Up of Downstream Processing (Hanser)"
    ],
    prerequisites: "BBL331, CLL252"
  },

  "BBL732": {
    description: "Integrated approach to designing industrial bioprocess plants — from bioreactor selection to process flowsheet development, equipment sizing, capital/operating cost estimation, and process safety.",
    objectives: "To integrate all bioprocess engineering knowledge into a complete plant design including techno-economic analysis and safety evaluation.",
    topics: [
      "Process design methodology and conceptual design",
      "Bioprocess flowsheet development",
      "Equipment selection — bioreactors, separators, utilities",
      "Mass and energy balances on complete plants",
      "Equipment sizing — bioreactors, columns, heat exchangers",
      "Utility systems — steam, cooling water, clean room classification",
      "Process economics — capital cost estimation (CAPEX)",
      "Operating cost estimation (OPEX) and profitability",
      "Process hazard analysis — HAZOP methodology",
      "Environmental impact and waste treatment design"
    ],
    textbooks: [
      "Doran P.M. — Bioprocess Engineering Principles (2nd Ed., Academic Press)",
      "Biegler L.T. et al. — Systematic Methods of Chemical Process Design (Prentice Hall)"
    ],
    prerequisites: "BBL331, BBL433, CLL261"
  },

  "BBL733": {
    description: "Principles and applications of recombinant DNA technology and genetic engineering — from cloning strategy to biopharmaceutical production. Includes modern genome editing tools and safety aspects.",
    objectives: "To design and implement recombinant DNA strategies for the production of valuable biological molecules in academic and industrial settings.",
    topics: [
      "Restriction enzymes, DNA ligases, and modification enzymes",
      "Cloning strategies — directional, TA, Gibson assembly",
      "Expression systems — E. coli, yeast, insect cells, mammalian cells",
      "Gene synthesis and codon optimisation",
      "CRISPR-Cas9 genome editing — design and applications",
      "Recombinant protein expression and purification",
      "Characterisation of recombinant proteins",
      "Transgenic organisms — plants and animals",
      "Biopharmaceuticals — insulin, growth hormone, monoclonal antibodies",
      "Safety levels (BSL) and regulatory aspects of GMOs"
    ],
    textbooks: [
      "Brown T.A. — Gene Cloning and DNA Analysis (7th Ed., Wiley-Blackwell)",
      "Nicholl D.S.T. — An Introduction to Genetic Engineering (3rd Ed., Cambridge)"
    ],
    prerequisites: "BBL231"
  },

  "BED451": {
    description: "B.Tech Project (Part I) — Independent research or design project under faculty supervision. Students conduct a literature survey, define the project scope, and complete preliminary experimental or design work by the end of the semester.",
    objectives: "To develop research skills, independent thinking, critical analysis, and technical report-writing abilities through a supervised project.",
    topics: [
      "Literature review and critical analysis of published work",
      "Research gap identification and problem definition",
      "Objective setting and project planning",
      "Experimental design or computational approach selection",
      "Preliminary data collection and analysis",
      "Mid-semester progress report and presentation",
      "Research ethics, scientific integrity, and plagiarism"
    ],
    textbooks: ["Assigned by project supervisor"],
    prerequisites: "Completion of Semester VI; supervisor allotment by department"
  },

  "BBL590": {
    description: "B.Tech Project I — Literature review, research proposal, and preliminary experimental/computational work for the final-year project under faculty supervision.",
    objectives: "To develop independent research skills, critical review capabilities, and technical communication through a structured project.",
    topics: [
      "Literature survey and gap analysis",
      "Research question formulation",
      "Experimental or computational methodology",
      "Preliminary data collection and results",
      "Mid-semester report and seminar presentation",
      "Project proposal document submission"
    ],
    textbooks: ["As assigned by supervisor"],
    prerequisites: "Completion of Semester VI"
  },

  /* ─────────────────────────────────────────────────────
     SEMESTER VIII
  ───────────────────────────────────────────────────── */

  "BBL601": {
    description: "Stem cell biology and tissue engineering — covering stem cell types, their differentiation, and the engineering of functional tissues using biomaterial scaffolds, bioreactors, and growth factor delivery.",
    objectives: "To understand stem cell biology and design tissue-engineered constructs for therapeutic and research applications.",
    topics: [
      "Pluripotent and multipotent stem cells — ESCs, MSCs",
      "iPSC generation, characterisation, and differentiation",
      "Stem cell niches and microenvironment",
      "Extracellular matrix composition and scaffold design",
      "Biomaterials — natural and synthetic polymers, hydrogels",
      "Bioreactors for tissue engineering — spinner flasks, rotating wall",
      "Skin, cartilage, and bone tissue engineering",
      "Vascularisation strategies",
      "Organoids and 3D bioprinting",
      "Regulatory pathway and clinical translation"
    ],
    textbooks: [
      "Lanza R. et al. — Principles of Tissue Engineering (4th Ed., Academic Press)",
      "Freshney R.I. — Culture of Animal Cells (7th Ed., Wiley)"
    ],
    prerequisites: "BBL202, BBL304"
  },

  "BBL602": {
    description: "Industrial biotechnology and white biotechnology — production of chemicals, fuels, and biomaterials from renewable feedstocks using microbial, enzymatic, and fermentation processes in a biorefinery framework.",
    objectives: "To design and evaluate industrial biotechnology processes for the production of value-added products from sustainable biomass.",
    topics: [
      "Overview of white biotechnology and bioeconomy",
      "Lignocellulosic biomass — composition, pretreatment, enzymatic hydrolysis",
      "Bioethanol production — corn and lignocellulosic routes",
      "Biobutanol production — ABE fermentation",
      "Biodiesel — enzymatic transesterification, algae",
      "Bio-based polymers — PHAs, PLA production",
      "Industrial amino acid and organic acid fermentation",
      "Techno-economic analysis and process integration",
      "Life cycle assessment of biorefineries"
    ],
    textbooks: [
      "Soetaert W. & Vandamme E.J. — Industrial Biotechnology (Wiley-VCH)",
      "Kamm B. et al. — Biorefineries — Industrial Processes and Products (Wiley-VCH)"
    ],
    prerequisites: "BBL401, BBL402"
  },

  "BBL690": {
    description: "B.Tech Project II — Continuation of BTP I involving completion of experimental or computational research, analysis, and submission of the final thesis with an oral defence examination.",
    objectives: "To complete the research project, analyse results comprehensively, and present findings in a written thesis and oral viva voce.",
    topics: [
      "Completion of planned experimental or computational work",
      "Data analysis, interpretation, and discussion",
      "Thesis writing and structure",
      "Final thesis submission",
      "Oral presentation (seminar) and viva voce examination"
    ],
    textbooks: ["As assigned by supervisor"],
    prerequisites: "BBL590 (B.Tech Project I)"
  },

  "DE1": {
    description: "Departmental Elective-1 (4 credits) — Choose from advanced electives offered by the Dept. of Biochemical Engineering & Biotechnology. Typical offerings include Animal Cell Technology, Nanobiotechnology, Systems Biology, and Immunotechnology.",
    objectives: "To deepen knowledge in a specialised area within biochemical engineering or biotechnology.",
    topics: ["As per the selected elective course"],
    textbooks: ["As specified by the course instructor"],
    prerequisites: "Completion of Semester VII core courses"
  },

  "DE2": {
    description: "Departmental Elective-2 (3 credits) — Choose from advanced electives offered by the department.",
    objectives: "To further specialise in a chosen area of biochemical engineering or biotechnology.",
    topics: ["As per the selected elective course"],
    textbooks: ["As specified by the course instructor"],
    prerequisites: "Completion of Semester VII core courses"
  },

  "DE3": {
    description: "Departmental Elective-3 (3 credits) — Choose from advanced electives offered by the department.",
    objectives: "To complete specialisation requirements in the chosen area.",
    topics: ["As per the selected elective course"],
    textbooks: ["As specified by the course instructor"],
    prerequisites: "Completion of Semester VII core courses"
  },

  "OC1": {
    description: "Open Category Elective-1 (4 credits) — Select any course from any department at IIT Delhi (Computer Science, Physics, Economics, Management, etc.) based on interests and academic goals.",
    objectives: "To broaden academic exposure and develop interdisciplinary skills beyond biochemical engineering.",
    topics: ["Determined by the selected course"],
    textbooks: ["As specified by the offering department"],
    prerequisites: "As specified by the offering department"
  },

  "OC2": {
    description: "Open Category Elective-2 (3 credits) — Select any course from any department at IIT Delhi.",
    objectives: "To develop interdisciplinary knowledge and broaden technical expertise.",
    topics: ["Determined by the selected course"],
    textbooks: ["As specified by the offering department"],
    prerequisites: "As specified by the offering department"
  },

  "OC3": {
    description: "Open Category Elective-3 (3 credits) — Select any course from any department at IIT Delhi.",
    objectives: "To develop interdisciplinary knowledge and broaden technical expertise.",
    topics: ["Determined by the selected course"],
    textbooks: ["As specified by the offering department"],
    prerequisites: "As specified by the offering department"
  },

  /* ─────────────────────────────────────────────────────
     GENERIC ELECTIVE PLACEHOLDERS
  ───────────────────────────────────────────────────── */

  "HUL2XX": {
    description: "Humanities and Social Sciences Elective — selected from the HSS pool offered by the Dept. of Humanities and Social Sciences, IIT Delhi. Options include courses in Economics, Sociology, Psychology, Literature, Management, and Philosophy.",
    objectives: "To develop a broader perspective beyond engineering through exposure to social sciences and humanities.",
    topics: ["Determined by the selected HSS course"],
    textbooks: ["As specified by the course instructor"],
    prerequisites: "None"
  },

  "HUL3XX": {
    description: "Senior Humanities and Social Sciences Elective from the HSS pool at IIT Delhi.",
    objectives: "To develop interdisciplinary thinking and communication skills.",
    topics: ["Determined by the selected HSS course"],
    textbooks: ["As specified by the course instructor"],
    prerequisites: "None"
  },

  "HULxxx": {
    description: "Humanities & Social Sciences Elective I — selected from the HSS pool at IIT Delhi.",
    objectives: "To provide exposure to social sciences, economics, or management.",
    topics: ["Determined by the selected course"],
    textbooks: ["As specified by the instructor"],
    prerequisites: "None"
  },

  "BBL3xx": {
    description: "Departmental Elective I — choose from the list of advanced courses offered by the Dept. of Biochemical Engineering & Biotechnology.",
    objectives: "To explore an advanced topic within the department.",
    topics: ["Determined by the selected elective"],
    textbooks: ["As specified by the instructor"],
    prerequisites: "Core courses through Semester IV"
  },

  "BBL4xx": {
    description: "Departmental Elective II — choose from advanced elective offerings of the department.",
    objectives: "To deepen knowledge in a chosen specialisation.",
    topics: ["Determined by the selected elective"],
    textbooks: ["As specified by the instructor"],
    prerequisites: "Core courses through Semester V"
  },

  "BBL5xx": {
    description: "Departmental Elective III — choose from senior elective offerings.",
    objectives: "To specialise in an advanced area.",
    topics: ["Determined by the selected elective"],
    textbooks: ["As specified by the instructor"],
    prerequisites: "Core courses through Semester VI"
  },

  "BBL5yy": {
    description: "Departmental Elective IV — choose from senior elective offerings.",
    objectives: "To further specialise in a chosen area.",
    topics: ["Determined by the selected elective"],
    textbooks: ["As specified by the instructor"],
    prerequisites: "Core courses through Semester VI"
  },

  "BBL6xx": {
    description: "Departmental Elective V — final-year advanced elective.",
    objectives: "To complete specialisation requirements.",
    topics: ["Determined by the selected elective"],
    textbooks: ["As specified by the instructor"],
    prerequisites: "Completion of Semester VII"
  },

  "ENTxxx": {
    description: "Entrepreneurship and Innovation (Open Elective) — covers principles of entrepreneurship, business model design, startup ecosystems, intellectual property, and technology commercialisation in the context of biotech ventures.",
    objectives: "To equip students with entrepreneurial thinking and practical tools to translate technical innovation into commercial ventures.",
    topics: [
      "Introduction to entrepreneurship and the startup mindset",
      "Opportunity identification and ideation tools",
      "Business model canvas and value proposition design",
      "Market research and customer validation",
      "Funding sources — angel investment, VC, grants, BIRAC",
      "Intellectual property — patents, trade secrets, licensing",
      "Startup ecosystem — incubators and accelerators (IIT Delhi TBI)",
      "Biotech startup case studies"
    ],
    textbooks: [
      "Osterwalder A. & Pigneur Y. — Business Model Generation",
      "Blank S. & Dorf B. — The Startup Owner's Manual"
    ],
    prerequisites: "None"
  },

  "OExxx": {
    description: "Open Elective (Outside Department) — choose any course from a different department at IIT Delhi to gain interdisciplinary knowledge.",
    objectives: "To develop interdisciplinary expertise beyond biochemical engineering.",
    topics: ["Determined by the selected course"],
    textbooks: ["As specified by the offering department"],
    prerequisites: "As specified by the offering department"
  }

};
