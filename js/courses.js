/**
 * courses.js  —  All curriculum data
 * ─────────────────────────────────────────────────────────────
 * Exports:
 *   CURRICULA        — Object with "new" (After 2025) and "old" (Before 2025)
 *   SEMESTER_ORDER   — Array defining sidebar display order
 *
 * Course object shape:
 *   code    {string}  Course code          e.g. "BBL131"
 *   name    {string}  Full course name
 *   credits {number}  Credits = L + T + P×0.5
 *   l       {number}  Lecture hours/week
 *   t       {number}  Tutorial hours/week
 *   p       {number}  Practical hours/week
 *   type    {string}  "Core" | "Elective" | "Lab"
 * ─────────────────────────────────────────────────────────────
 */

'use strict';

/* ════════════════════════════════════════════════════════════
   AFTER 2025 ENTRY  —  Revised Modular Curriculum
════════════════════════════════════════════════════════════ */
const CURRICULA = {

  new: {
    meta: {
      label:       'After 2025',
      description: 'After 2025 Entry — Revised modular syllabus'
    },

    /* Semester III */
    III: {
      label: 'Semester III',
      courses: [
        { code:'MLL100', name:'Introduction to Materials Science and Engineering', credits:4,  l:3, t:0, p:2, type:'Core'     },
        { code:'CLL110', name:'Transport Phenomena',                               credits:4,  l:3, t:1, p:0, type:'Core'     },
        { code:'BBL101', name:'Biochemistry',                                      credits:4,  l:3, t:0, p:2, type:'Core'     },
        { code:'BBL102', name:'Microbiology',                                      credits:4,  l:3, t:0, p:2, type:'Core'     },
        { code:'MAL201', name:'Mathematics III (Probability and Statistics)',      credits:4,  l:3, t:1, p:0, type:'Core'     },
        { code:'HUL201', name:'Technical Writing',                                 credits:4,  l:3, t:1, p:0, type:'Core'     }
      ]
    },

    /* Semester IV */
    IV: {
      label: 'Semester IV',
      courses: [
        { code:'BBL201', name:'Molecular Biology and Genetics',       credits:4,  l:3, t:0, p:2, type:'Core' },
        { code:'BBL202', name:'Cell Biology',                         credits:4,  l:3, t:1, p:0, type:'Core' },
        { code:'CLL211', name:'Chemical Reaction Engineering',        credits:4,  l:3, t:1, p:0, type:'Core' },
        { code:'CLL212', name:'Thermodynamics',                       credits:4,  l:3, t:1, p:0, type:'Core' },
        { code:'BBL203', name:'Bioprocess Engineering I',             credits:4,  l:3, t:0, p:2, type:'Core' },
        { code:'MAL202', name:'Numerical Methods for Engineers',      credits:4,  l:3, t:1, p:0, type:'Core' }
      ]
    },

    /* Semester V */
    V: {
      label: 'Semester V',
      courses: [
        { code:'BBL301', name:'Bioprocess Engineering II (Scale-Up and Design)',  credits:4,  l:3, t:0, p:2, type:'Core'     },
        { code:'BBL302', name:'Downstream Processing and Bioseparation',          credits:4,  l:3, t:1, p:0, type:'Core'     },
        { code:'BBL303', name:'Enzyme Engineering and Technology',                credits:4,  l:3, t:1, p:0, type:'Core'     },
        { code:'BBL304', name:'Immunology',                                       credits:4,  l:3, t:0, p:2, type:'Core'     },
        { code:'BBL3xx', name:'Departmental Elective I',                          credits:4,  l:3, t:1, p:0, type:'Elective' },
        { code:'HULxxx', name:'Humanities & Social Sciences Elective I',          credits:3,  l:3, t:0, p:0, type:'Elective' }
      ]
    },

    /* Semester VI */
    VI: {
      label: 'Semester VI',
      courses: [
        { code:'BBL401', name:'Recombinant DNA Technology and Genetic Engineering', credits:4,  l:3, t:0, p:2, type:'Core'     },
        { code:'BBL402', name:'Metabolic Engineering',                               credits:4,  l:3, t:1, p:0, type:'Core'     },
        { code:'BBL403', name:'Bioinformatics and Computational Biology',            credits:4,  l:3, t:0, p:2, type:'Core'     },
        { code:'BBL404', name:'Food Technology and Fermentation Engineering',        credits:4,  l:3, t:1, p:0, type:'Core'     },
        { code:'BBL4xx', name:'Departmental Elective II',                            credits:4,  l:3, t:1, p:0, type:'Elective' },
        { code:'ENTxxx', name:'Entrepreneurship and Innovation (Open Elective)',     credits:3,  l:3, t:0, p:0, type:'Elective' }
      ]
    },

    /* Semester VII */
    VII: {
      label: 'Semester VII',
      courses: [
        { code:'BBL501', name:'Drug Delivery Systems and Pharmaceutical Biotechnology', credits:4,  l:3, t:1, p:0, type:'Core'     },
        { code:'BBL502', name:'Plant Biotechnology',                                     credits:4,  l:3, t:0, p:2, type:'Core'     },
        { code:'BBL503', name:'Environmental Biotechnology and Bioremediation',          credits:4,  l:3, t:1, p:0, type:'Core'     },
        { code:'BBL5xx', name:'Departmental Elective III',                               credits:4,  l:3, t:1, p:0, type:'Elective' },
        { code:'BBL5yy', name:'Departmental Elective IV',                                credits:4,  l:3, t:1, p:0, type:'Elective' },
        { code:'BBL590', name:'B.Tech Project I (Literature Review and Proposal)',       credits:4,  l:0, t:0, p:8, type:'Lab'      }
      ]
    },

    /* Semester VIII */
    VIII: {
      label: 'Semester VIII',
      courses: [
        { code:'BBL601', name:'Stem Cell Biology and Tissue Engineering',         credits:4,  l:3, t:1, p:0, type:'Core'     },
        { code:'BBL602', name:'Industrial Biotechnology and White Biotechnology', credits:4,  l:3, t:1, p:0, type:'Core'     },
        { code:'BBL6xx', name:'Departmental Elective V',                          credits:4,  l:3, t:1, p:0, type:'Elective' },
        { code:'OExxx',  name:'Open Elective (Outside Department)',               credits:3,  l:3, t:0, p:0, type:'Elective' },
        { code:'BBL690', name:'B.Tech Project II (Research and Thesis)',          credits:8,  l:0, t:0, p:16,type:'Lab'      }
      ]
    }
  },


  /* ════════════════════════════════════════════════════════════
     BEFORE 2025 ENTRY  —  Official BB1 Curriculum
     Source: IIT Delhi B.Tech BEB Programme Structure Chart
     Credit formula: L + T + P × 0.5
     ─────────────────────────────────────────────────────────
     Sem III  : 18L 1T 10P | 24.0 cr | 29 contact hrs
     Sem IV   : 17L 4T  0P | 21.0 cr | 26 contact hrs
     Sem V    : 15L 2T  9P | 21.5 cr | 26 contact hrs
     Sem VI   : 12L 1T  7P | 16.5 cr | 20 contact hrs
     Sem VII  : 14L 0T 16P | 22.0 cr | 30 contact hrs
     Sem VIII : 15L 0T  2P | 16.0 cr | 17 contact hrs
                                 Grand Total = 158.0 credits
  ════════════════════════════════════════════════════════════ */
  old: {
    meta: {
      label:       'Before 2025',
      description: 'Before 2025 Entry — Official BB1 pre-revised syllabus'
    },

    /* Semester III  |  18L 1T 10P  |  24.0 cr */
    III: {
      label: 'Semester III',
      courses: [
        { code:'MLL100', name:'Introduction to Materials Science and Engineering',  credits:4,   l:3, t:0, p:2, type:'Core', slot:'E' },
        { code:'CLL110', name:'Transport Phenomena',                                credits:4,   l:3, t:1, p:0, type:'Core', slot:'D' },
        { code:'SBL100', name:'Introductory Biology for Engineers',                 credits:4,   l:3, t:0, p:2, type:'Core', slot:'C' },
        { code:'BBL131', name:'Principles of Biochemistry',                         credits:4.5, l:3, t:0, p:3, type:'Core', slot:'B' },
        { code:'BBL132', name:'General Microbiology',                               credits:4.5, l:3, t:0, p:3, type:'Core', slot:'F' },
        { code:'BBL133', name:'Mass and Energy Balances in Biochemical Engineering',credits:3,   l:3, t:0, p:0, type:'Core', slot:'H' }
      ]
    },

    /* Semester IV  |  17L 4T 0P  |  21.0 cr */
    IV: {
      label: 'Semester IV',
      courses: [
        { code:'CLL251', name:'Heat Transfer for Chemical Engineers',   credits:4,  l:3, t:1, p:0, type:'Core', slot:'B' },
        { code:'CLL122', name:'Chemical Reaction Engineering-I',        credits:4,  l:3, t:1, p:0, type:'Core', slot:'D' },
        { code:'CLL231', name:'Fluid Mechanics for Chemical Engineers', credits:4,  l:3, t:1, p:0, type:'Core', slot:'A' },
        { code:'CVL100', name:'Environmental Science',                  credits:2,  l:2, t:0, p:0, type:'Core', slot:'C' },
        { code:'MTL102', name:'Differential Equations',                 credits:3,  l:3, t:0, p:0, type:'Core', slot:'E' },
        { code:'HUL2XX', name:'Humanities Elective-1',                  credits:4,  l:3, t:1, p:0, type:'Elective' }
      ]
    },

    /* Semester V  |  15L 2T 9P  |  21.5 cr */
    V: {
      label: 'Semester V',
      courses: [
        { code:'BBL231', name:'Molecular Biology and Genetics',      credits:4.5, l:3, t:0, p:3, type:'Core', slot:'D' },
        { code:'CLL252', name:'Mass Transfer-I',                     credits:3,   l:3, t:0, p:0, type:'Core', slot:'F' },
        { code:'CLL261', name:'Process Dynamics and Control',        credits:4,   l:3, t:1, p:0, type:'Core', slot:'E' },
        { code:'CLP301', name:'Chemical Engineering Laboratory-I',   credits:1.5, l:0, t:0, p:3, type:'Lab', slot:'F' },
        { code:'BBP332', name:'Bioprocess Engineering Laboratory',   credits:1.5, l:0, t:0, p:3, type:'Lab', slot:'P' },
        { code:'BBL331', name:'Bioprocess Engineering',              credits:4,   l:3, t:1, p:0, type:'Core', slot:'B' },
        { code:'HUL2XX', name:'Humanities Elective-2',               credits:3,   l:3, t:0, p:0, type:'Elective' }
      ]
    },

    /* Semester VI  |  12L 1T 7P  |  16.5 cr */
    VI: {
      label: 'Semester VI',
      courses: [
        { code:'CLP302', name:'Chemical Engineering Laboratory-II',  credits:1.5, l:0, t:0, p:3, type:'Lab', slot:'E' },
        { code:'HUL2XX', name:'Humanities Elective-3',               credits:4,   l:3, t:1, p:0, type:'Elective' },
        { code:'BBL432', name:'Fluid Solid Systems',                 credits:2,   l:2, t:0, p:0, type:'Core', slot:'H' },
        { code:'BBL433', name:'Bioinformatics',                      credits:3,   l:2, t:0, p:2, type:'Core', slot:'D' },
        { code:'BBL434', name:'Enzyme Science and Engineering',      credits:4,   l:3, t:0, p:2, type:'Core', slot:'F' },
        { code:'BBL435', name:'Bioprocess Technology',               credits:2,   l:2, t:0, p:0, type:'Core' }
      ]
    },

    /* Semester VII  |  14L 0T 16P  |  22.0 cr */
    VII: {
      label: 'Semester VII',
      courses: [
        { code:'HUL3XX', name:'Humanities Elective-4',      credits:3,   l:3, t:0, p:0, type:'Elective' },
        { code:'OC1',    name:'Open Category Elective-1',   credits:4,   l:3, t:0, p:2, type:'Elective' },
        { code:'BED451', name:'B.Tech. Project',            credits:3,   l:0, t:0, p:6, type:'Lab' },
        { code:'BBL731', name:'Bioseparation Engineering',  credits:4.5, l:3, t:0, p:3, type:'Core', slot:'C' },
        { code:'BBL732', name:'Bioprocess Plant Design',    credits:4,   l:3, t:0, p:2, type:'Core', slot:'B' },
        { code:'BBL733', name:'Recombinant DNA Technology', credits:3.5, l:2, t:0, p:3, type:'Core', slot:'D' }
      ]
    },

    /* Semester VIII  |  15L 0T 2P  |  16.0 cr */
    VIII: {
      label: 'Semester VIII',
      courses: [
        { code:'DE1', name:'Departmental Elective-1',   credits:4,  l:3, t:0, p:2, type:'Elective' },
        { code:'DE2', name:'Departmental Elective-2',   credits:3,  l:3, t:0, p:0, type:'Elective' },
        { code:'DE3', name:'Departmental Elective-3',   credits:3,  l:3, t:0, p:0, type:'Elective' },
        { code:'OC2', name:'Open Category Elective-2',  credits:3,  l:3, t:0, p:0, type:'Elective' },
        { code:'OC3', name:'Open Category Elective-3',  credits:3,  l:3, t:0, p:0, type:'Elective' }
      ]
    }
  }
};

/** Sidebar display order — same for both curricula */
const SEMESTER_ORDER = ['III', 'IV', 'V', 'VI', 'VII', 'VIII'];
