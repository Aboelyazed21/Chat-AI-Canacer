/**
 * ONCOCARE AI COMPREHENSIVE ONCOLOGY KNOWLEDGE BASE
 * Embedded High-Precision Clinical Reference File for Instant Retrieval & RAG Grounding
 */

export interface KnowledgeEntry {
  id: string;
  keywords: string[];
  category: 'Chemotherapy Regimens' | 'Immunotherapy' | 'Targeted Therapy' | 'Staging & TNM' | 'Side Effect Management' | 'Biomarkers & Genetics' | 'Pediatric Oncology' | 'Clinical Guidelines' | 'General Internal Medicine' | 'Cardiology & Metabolic' | 'Infectious Disease & Pharmacology' | 'Neurology & Emergency';
  title: string;
  summary: string;
  detailedProtocol: string;
  indication: string;
  dosingOrSchedule: string;
  keyTrialReferences: string[];
  managementTips: string[];
}

export const ONCOLOGY_KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    id: 'kb-breast-ac-t',
    keywords: ['breast cancer', 'ac-t', 'doxorubicin', 'cyclophosphamide', 'paclitaxel', 'her2-negative', 'neoadjuvant', 'adjuvant', 'سرطان الثدي'],
    category: 'Chemotherapy Regimens',
    title: 'AC-T Dose-Dense Regimen for Early & Locally Advanced Breast Cancer',
    summary: 'Standard dose-dense regimen consisting of Doxorubicin (Adriamycin) plus Cyclophosphamide followed by Paclitaxel (Taxol) supported by G-CSF growth factor support.',
    detailedProtocol: 'Cycle 1-4: Doxorubicin 60 mg/m² IV + Cyclophosphamide 600 mg/m² IV every 2 weeks x 4 cycles (Dose-Dense AC). Supported with Pegfilgrastim 6mg SC on Day 2. Followed by Cycle 5-8: Paclitaxel 175 mg/m² IV every 2 weeks x 4 cycles (or weekly Paclitaxel 80 mg/m² x 12 weeks).',
    indication: 'Stage I-III Invasive Ductal/Lobular Carcinoma of the breast with high recurrence score or node-positive status.',
    dosingOrSchedule: 'Dose-dense biweekly administration with Filgrastim/Pegfilgrastim prophylaxis.',
    keyTrialReferences: [
      'CALGB 9741 (NCI): Dose-dense therapy improves disease-free and overall survival in node-positive breast cancer.',
      'NSABP B-15: Comparative study of adriamycin and cyclophosphamide in node-positive breast carcinoma.'
    ],
    managementTips: [
      'Monitor baseline left ventricular ejection fraction (LVEF) via ECHO/MUGA scan prior to anthracycline exposure due to cardiotoxicity risk.',
      'Pre-medicate Paclitaxel with Dexamethasone, Diphenhydramine, and H2-blockers to prevent acute hypersensitivity reactions.',
      'Prophylactic antiemetics (NK1 receptor antagonist + 5-HT3 antagonist + Dexamethasone) for high emetogenic potential of AC.'
    ]
  },
  {
    id: 'kb-lung-pembro-chemo',
    keywords: ['nsclc', 'lung cancer', 'pembrolizumab', 'keytruda', 'carboplatin', 'pemetrexed', 'keynote-189', 'egfr negative', 'alk negative', 'سرطان الرئة'],
    category: 'Immunotherapy',
    title: 'KEYNOTE-189: Pembrolizumab + Pemetrexed + Platinum for Non-Squamous NSCLC',
    summary: 'First-line standard of care for metastatic non-squamous Non-Small Cell Lung Cancer without EGFR or ALK genomic alterations, regardless of PD-L1 expression level.',
    detailedProtocol: 'Pembrolizumab 200 mg IV Q3W (or 400 mg IV Q6W) + Pemetrexed 500 mg/m² IV + Cisplatin 75 mg/m² (or Carboplatin AUC 5) IV every 21 days for 4 cycles, followed by maintenance Pembrolizumab + Pemetrexed until progression or unacceptable toxicity.',
    indication: 'Metastatic (Stage IV) non-squamous non-small cell lung cancer without actionable EGFR/ALK genomic tumor aberrations.',
    dosingOrSchedule: 'Every 3 weeks for 4 induction cycles, followed by maintenance immunotherapy + antimetabolite.',
    keyTrialReferences: [
      'KEYNOTE-189 (NEJM 2018): Pembrolizumab plus Chemotherapy in Metastatic Non-Squamous Lung Cancer.',
      'NCCN Guidelines for Non-Small Cell Lung Cancer v2.2026.'
    ],
    managementTips: [
      'Supplement Pemetrexed with Oral Folic Acid (400-1000 mcg daily) and Vitamin B12 injections (1000 mcg every 9 weeks) to mitigate hematologic and GI toxicity.',
      'Administer Dexamethasone 4mg PO BID day before, day of, and day after pemetrexed to prevent skin rash.',
      'Monitor thyroid function tests (TSH/Free T4) and baseline chest CT for immune-related pneumonitis or thyroiditis.'
    ]
  },
  {
    id: 'kb-colorectal-folfox',
    keywords: ['colorectal cancer', 'colon cancer', 'folfox', '5-fu', 'oxaliplatin', 'leucovorin', 'folfox6', 'mFOLFOX6', 'adjuvant', 'سرطان القولون'],
    category: 'Chemotherapy Regimens',
    title: 'mFOLFOX6 Regimen for Stage III & High-Risk Stage II Colon Cancer',
    summary: 'Standard doublet chemotherapy containing Oxaliplatin, Leucovorin, and 5-Fluorouracil (5-FU) bolus and continuous infusion.',
    detailedProtocol: 'Day 1: Oxaliplatin 85 mg/m² IV in D5W over 2 hours + Leucovorin 400 mg/m² IV over 2 hours, followed by 5-FU 400 mg/m² IV bolus, then 5-FU 2400 mg/m² IV continuous infusion over 46 hours via ambulatory CADD pump. Repeated every 14 days for 12 cycles (6 months).',
    indication: 'Resected Stage III colon adenocarcinoma or metastatic colorectal cancer (mCRC).',
    dosingOrSchedule: 'Biweekly 14-day cycles for 6 months adjuvant duration (or 3 months CAPOX per IDEA trial for low-risk Stage III).',
    keyTrialReferences: [
      'MOSAIC Trial (NEJM): Oxaliplatin, Fluorouracil, and Leucovorin as Adjuvant Treatment for Colon Cancer.',
      'IDEA Collaboration (NEJM 2018): Duration of Adjuvant Chemotherapy for Stage III Colon Cancer.'
    ],
    managementTips: [
      'Warn patients about cold-induced acute peripheral neuropathy; avoid cold drinks, ice, or exposure to cold air for 5 days post-oxaliplatin.',
      'Test DPD (Dihydropyrimidine Dehydrogenase) gene deficiency prior to 5-FU administration to prevent fatal fluoropyrimidine toxicity.',
      'Central venous access (PICC or Port-a-Cath) is mandatory for continuous 46-hour 5-FU pump infusion.'
    ]
  },
  {
    id: 'kb-target-egfr-osimertinib',
    keywords: ['egfr', 'osimertinib', 'tagrisso', 't790m', 'exon 19 deletion', 'l858r', 'targeted therapy', 'lung cancer', 'علاج موجه', 'أوسيميرتينيب'],
    category: 'Targeted Therapy',
    title: 'Osimertinib (Tagrisso) 3rd Generation EGFR Tyrosine Kinase Inhibitor',
    summary: 'Irreversible 3rd generation oral EGFR-TKI designed to inhibit both EGFR sensitizing mutations (Ex19del, L858R) and T790M resistance mutations with high CNS penetration.',
    detailedProtocol: 'Osimertinib 80 mg orally once daily, taken with or without food, continued until disease progression or unacceptable toxicity.',
    indication: 'First-line treatment of adult patients with metastatic NSCLC whose tumors have EGFR exon 19 deletions or exon 21 L858R mutations, or adjuvant treatment post-resection (ADAURA).',
    dosingOrSchedule: 'Continuous daily oral monotherapy.',
    keyTrialReferences: [
      'FLAURA Trial (NEJM): Overall Survival with Osimertinib in Untreated, EGFR-Mutated Advanced NSCLC.',
      'ADAURA Trial (NEJM 2020): Adjuvant Osimertinib in Resected EGFR-Mutated NSCLC.'
    ],
    managementTips: [
      'Monitor ECG for QTc prolongation and baseline Echocardiogram for left ventricular ejection fraction reduction.',
      'Manage common side effects: mild diarrhea (Loperamide PRN), paronychia/nail updates, and dry skin/acneiform rash.',
      'Screen regularly for interstitial lung disease (ILD) / pneumonitis symptoms (cough, exertional dyspnea).'
    ]
  },
  {
    id: 'kb-febrile-neutropenia',
    keywords: ['febrile neutropenia', 'anc', 'neutrophil', 'fever', 'anc < 500', 'sepsis', 'g-csf', 'cefepime', 'pip-tazo', 'حمي انخفاض المناعة'],
    category: 'Side Effect Management',
    title: 'Oncology Emergency: Management of Febrile Neutropenia (FN)',
    summary: 'Critical oncologic emergency defined as single oral temperature ≥38.3°C (101°F) or ≥38.0°C (100.4°F) sustained over 1 hour with ANC <500 cells/mcL.',
    detailedProtocol: 'Immediate empiric broad-spectrum anti-pseudomonal beta-lactam IV monotherapy within 60 minutes of presentation: Cefepime 2g IV Q8H, Piperacillin-Tazobactam (Zosyn) 4.5g IV Q6H, or Meropenem 1g IV Q8H.',
    indication: 'Post-chemotherapy patients presenting with fever and severe neutropenia.',
    dosingOrSchedule: 'Stat IV administration within the 1-hour golden window following blood culture collection.',
    keyTrialReferences: [
      'ASCO / IDSA Guideline for Outpatient Management of Fever and Neutropenia in Adult Cancer Patients.',
      'NCCN Guidelines for Prevention and Treatment of Cancer-Related Infections v1.2026.'
    ],
    managementTips: [
      'Obtain 2 sets of blood cultures (one from central venous line, one peripheral) prior to initiating antibiotics, but DO NOT delay antibiotics beyond 60 minutes.',
      'Calculate MASCC risk index score: High risk (<21) requires inpatient admission and IV antibiotics; Low risk (≥21) may qualify for outpatient oral Ciprofloxacin + Amoxicillin-Clavulanate.',
      'Avoid rectal thermometers, suppositories, or digital rectal exams to prevent mucosal translocation of gut bacteria.'
    ]
  },
  {
    id: 'kb-tnm-staging-system',
    keywords: ['tnm', 'staging', 'tumor size', 'lymph nodes', 'metastasis', 'stage i', 'stage ii', 'stage iii', 'stage iv', 'مراحل السرطان'],
    category: 'Staging & TNM',
    title: 'AJCC 8th Edition TNM Cancer Staging Classification System',
    summary: 'Universal anatomical framework assessing Primary Tumor (T), Regional Lymph Nodes (N), and Distant Metastasis (M), integrated with molecular biomarker risk levels.',
    detailedProtocol: 'T (T0-T4): Size and local invasion depth of primary tumor. N (N0-N3): Extent and location of regional lymph node involvement. M (M0, M1a/b/c): Absence or presence of distant metastatic organ spread.',
    indication: 'Clinical and pathological classification across all solid tumor malignancies.',
    dosingOrSchedule: 'Determined at baseline diagnosis (Clinical cTNM) and post-resection (Pathological pTNM).',
    keyTrialReferences: [
      'AJCC Cancer Staging Manual, 8th Edition (American Joint Committee on Cancer).',
      'UICC Manual of Clinical Oncology.'
    ],
    managementTips: [
      'Stage I-II: Generally localized disease eligible for curative surgical resection or definitive chemoradiation.',
      'Stage III: Regionally advanced node-positive disease requiring multimodal neoadjuvant or adjuvant systemic treatment.',
      'Stage IV: Distant metastatic disease requiring precision biomarker-driven systemic therapy, palliative care, and symptom control.'
    ]
  },
  {
    id: 'kb-pediatric-ALL-protocol',
    keywords: ['pediatric oncology', 'acute lymphoblastic leukemia', 'all', 'vincristine', 'asparaginase', 'dexamethasone', 'methotrexate', 'سرطان الدم للأطفال'],
    category: 'Pediatric Oncology',
    title: 'COG (Children Oncology Group) Standard Risk B-ALL Induction Protocol',
    summary: 'Multi-agent remission induction therapy for pediatric B-cell Acute Lymphoblastic Leukemia.',
    detailedProtocol: '4-Week 3-Drug Induction: Vincristine 1.5 mg/m² IV weekly (Days 1, 8, 15, 22) + Dexamethasone 6 mg/m² PO daily (Days 1-28) + Pegaspargase 2500 IU/m² IM/IV (Day 4). Intrathecal Methotrexate administered on Day 1 and Day 29 for CNS prophylaxis.',
    indication: 'Pediatric patients aged 1-18 with newly diagnosed B-cell Acute Lymphoblastic Leukemia.',
    dosingOrSchedule: '4-week induction phase followed by consolidation, interim maintenance, delayed intensification, and long-term maintenance.',
    keyTrialReferences: [
      'Children\'s Oncology Group (COG) AALL0932 & AALL1131 Clinical Trials.',
      'NCI Pediatric ALL Treatment Guidelines 2026.'
    ],
    managementTips: [
      'Cap single Vincristine doses at 2.0 mg maximum to avoid catastrophic peripheral neuropathy and ileus.',
      'Monitor for Pegaspargase-induced hypersensitivity, acute pancreatitis, hypertriglyceridemia, and deep vein thrombosis (DVT).',
      'Measure Minimal Residual Disease (MRD) via flow cytometry or NGS on Day 29 bone marrow aspirate to stratify risk.'
    ]
  },
  {
    id: 'kb-immunotherapy-imaes',
    keywords: ['imae', 'irae', 'immune checkpoint inhibitor', 'pembrolizumab', 'nivolumab', 'ipilimumab', 'colitis', 'pneumonitis', 'hepatitis', 'prednisone', 'مضاعفات العلاج المناعي'],
    category: 'Side Effect Management',
    title: 'Management of Immune-Mediated Adverse Events (iMAEs) from Checkpoint Inhibitors',
    summary: 'Autoimmune-like toxicities triggered by anti-PD-1, anti-PD-L1, and anti-CTLA-4 immunotherapy.',
    detailedProtocol: 'Grade 1: Continue ICI with close symptom monitoring. Grade 2: Hold ICI; initiate Oral Prednisone 0.5-1.0 mg/kg/day until Grade ≤1, then taper over 4+ weeks. Grade 3-4: Permanently discontinue ICI (or hold Grade 3 pneumonitis); initiate High-Dose IV Methylprednisolone 1-2 mg/kg/day. If steroid-refractory after 48-72h, add Infliximab 5 mg/kg or Vedolizumab (for colitis) or Mycophenolate Mofetil (for hepatitis).',
    indication: 'Patients receiving Pembrolizumab, Nivolumab, Ipilimumab, Atezolizumab, or Durvalumab.',
    dosingOrSchedule: 'Immediate immunosuppression based on CTCAE v5.0 severity grading.',
    keyTrialReferences: [
      'ASCO Clinical Practice Guideline: Management of Immune-Related Adverse Events in Patients Treated with Checkpoint Inhibitors.',
      'ESMO Clinical Practice Guidelines for Diagnosis, Treatment, and Follow-up of iRAEs.'
    ],
    managementTips: [
      'Do NOT give Infliximab for immune-mediated hepatitis due to liver failure risk; use Mycophenolate Mofetil (MMF) instead.',
      'Provide PCP (Pneumocystis jirovecii) prophylaxis (Bactrim DS) and PPI gastroprotection during prolonged steroid tapers (>4 weeks).',
      'Check baseline LFTs, TSH, serum lipase, and troponin at every treatment cycle.'
    ]
  },
  {
    id: 'kb-prostate-adt-enzalutamide',
    keywords: ['prostate cancer', 'psa', 'enzalutamide', 'abiraterone', 'adt', 'lupron', 'gnrh', 'castration resistant', 'mcrcp', 'سرطان البروستاتا'],
    category: 'Targeted Therapy',
    title: 'ADT + Enzalutamide / Abiraterone for Metastatic Prostate Cancer (mHSPC / mCRPC)',
    summary: 'Androgen Deprivation Therapy (ADT) combined with 2nd-generation Androgen Receptor Signaling Inhibitors (ARSI).',
    detailedProtocol: 'Continuous ADT with GnRH Agonist (Leuprolide 22.5mg SC Q3M) OR GnRH Antagonist (Relugolix 120mg PO daily) PLUS Enzalutamide 160 mg PO daily (OR Abiraterone Acetate 1000 mg PO daily + Prednisone 5 mg PO daily).',
    indication: 'Metastatic Hormone-Sensitive Prostate Cancer (mHSPC) or Metastatic Castration-Resistant Prostate Cancer (mCRPC).',
    dosingOrSchedule: 'Continuous daily oral ARSI combined with depot GnRH administration.',
    keyTrialReferences: [
      'ARCHES Trial (JCO): Enzalutamide in Metastatic Hormone-Sensitive Prostate Cancer.',
      'LATITUDE Trial (NEJM): Abiraterone plus Prednisone in Metastatic Castrate-Sensitive Prostate Cancer.'
    ],
    managementTips: [
      'Monitor serum PSA every 1-3 months; an rising PSA while castrate (Testosterone <50 ng/dL) indicates transition to mCRPC.',
      'Assess bone mineral density (DEXA scan) baseline and every 2 years; prescribe Denosumab 60mg SC Q6M or Zoledronic acid for bone preservation.',
      'Evaluate cardiovascular risk factors, lipid panel, and blood glucose when using long-term ADT and steroids.'
    ]
  },
  {
    id: 'kb-brain-gbm-stupp',
    keywords: ['brain tumor', 'glioblastoma', 'gbm', 'stupp protocol', 'temozolomide', 'rt', 'idh1', 'mgmt', 'astrocytoma', 'أورام الدماغ', 'جليوبلاستوما'],
    category: 'Clinical Guidelines',
    title: 'Stupp Protocol for Glioblastoma Multiforme (GBM, WHO Grade 4)',
    summary: 'Standard focal radiotherapy combined with concomitant and adjuvant Temozolomide (TMZ) chemotherapy.',
    detailedProtocol: 'Concomitant Phase: Focal RT 60 Gy in 30 fractions (2.0 Gy/fx) with daily oral Temozolomide 75 mg/m²/day for 42 days. Adjuvant Phase: 4-week break, then 6 cycles of adjuvant Temozolomide 150-200 mg/m²/day for 5 consecutive days every 28 days.',
    indication: 'Newly diagnosed Glioblastoma (IDH-wildtype) or Grade 4 Astrocytoma post maximum feasible surgical resection.',
    dosingOrSchedule: '6-week radiochemotherapy phase followed by 6 months maintenance oral alkylating agent chemotherapy.',
    keyTrialReferences: [
      'Stupp et al. (NEJM 2005): Radiotherapy plus Concomitant and Adjuvant Temozolomide for Glioblastoma.',
      'EORTC 26981 / NCIC CE.3 Trial.'
    ],
    managementTips: [
      'Perform MGMT Promoter Methylation assay; hypermethylated MGMT predicts significantly improved TMZ responsiveness and overall survival.',
      'Administer Pneumocystis jirovecii prophylaxis (Trimethoprim-Sulfamethoxazole) during daily concurrent radiochemotherapy phase.',
      'Obtain baseline MRI brain within 48h post-surgery and evaluate pseudo-progression vs true recurrence on 12-week post-RT scan.'
    ]
  },
  {
    id: 'kb-pancreatic-folfirinox',
    keywords: ['pancreatic cancer', 'folfirinox', 'ca 19-9', 'irinotecan', 'oxaliplatin', '5-fu', 'pancreatic adenocarcinoma', 'سرطان البنكرياس'],
    category: 'Chemotherapy Regimens',
    title: 'FALFIRINOX (mFOLFIRINOX) for Locally Advanced & Metastatic Pancreatic Cancer',
    summary: 'Aggressive triplet chemotherapy regimen demonstrating superior overall survival over Gemcitabine in fit patients (ECOG 0-1).',
    detailedProtocol: 'Day 1: Oxaliplatin 85 mg/m² IV over 2h + Irinotecan 150-180 mg/m² IV over 90 min + Leucovorin 400 mg/m² IV over 2h, followed by 5-FU continuous infusion 2400 mg/m² over 46 hours. Repeated every 14 days.',
    indication: 'First-line therapy for borderline resectable, locally advanced, or metastatic pancreatic ductal adenocarcinoma in ECOG PS 0-1 patients.',
    dosingOrSchedule: 'Biweekly 14-day cycles, supported by primary G-CSF prophylaxis.',
    keyTrialReferences: [
      'PRODIGE 4 / ACCORD 11 Trial (NEJM): FOLFIRINOX versus Gemcitabine for Metastatic Pancreatic Cancer.',
      'PRODIGE 24 / CACC 2012: Adjuvant FOLFIRINOX in Resected Pancreatic Cancer.'
    ],
    managementTips: [
      'Monitor serum CA 19-9 baseline and every 2-3 cycles as a reliable therapeutic response biomarker.',
      'Pre-medicate Irinotecan with Atropine 0.25-1.0 mg IV/SC to manage acute cholinergic syndrome (cramping, diaphoresis, early diarrhea).',
      'Provide oral Loperamide protocol for delayed Irinotecan diarrhea and antiemetic triad for high emetogenicity.'
    ]
  },
  {
    id: 'kb-hematology-rchop',
    keywords: ['lymphoma', 'dlbcl', 'r-chop', 'rituximab', 'cyclophosphamide', 'doxorubicin', 'vincristine', 'prednisone', 'non-hodgkin', 'سرطان الغدد الليمفاوية'],
    category: 'Chemotherapy Regimens',
    title: 'R-CHOP Regimen for Diffuse Large B-Cell Lymphoma (DLBCL)',
    summary: 'Standard immunochemotherapy combining Anti-CD20 monoclonal antibody (Rituximab) with CHOP chemotherapy.',
    detailedProtocol: 'Day 1: Rituximab 375 mg/m² IV + Cyclophosphamide 750 mg/m² IV + Doxorubicin 50 mg/m² IV + Vincristine 1.4 mg/m² IV (max 2mg cap). Days 1-5: Prednisone 100 mg PO daily. Repeated every 21 days for 6 cycles.',
    indication: 'Newly diagnosed CD20-positive Diffuse Large B-Cell Lymphoma (DLBCL) or Advanced Follicular Lymphoma.',
    dosingOrSchedule: 'Triweekly 21-day cycles for 6 planned cycles with PET-CT interim evaluation.',
    keyTrialReferences: [
      'Coiffier et al. (NEJM 2002): CHOP chemotherapy plus Rituximab compared with CHOP alone in elderly DLBCL patients.',
      'NCCN Guidelines for B-Cell Lymphomas v1.2026.'
    ],
    managementTips: [
      'Screen for Hepatitis B Virus (HBsAg and anti-HBc) prior to Rituximab due to severe hepatitis B reactivation risk; initiate Entecavir prophylaxis if positive.',
      'Pre-medicate Rituximab with Acetaminophen 650mg + Diphenhydramine 50mg + IV Hydrocortisone to mitigate infusion-related reactions.',
      'Perform interim Deauville score PET-CT scan after Cycle 2 or 4 to assess metabolic complete response.'
    ]
  },
  {
    id: 'kb-biomarkers-report-guide',
    keywords: ['biomarker', 'her2', 'ki-67', 'pd-l1', 'msi-high', 'dmr', 'tmb', 'cea', 'ca125', 'ca19-9', 'psa', 'afp', 'مؤشرات الأورام', 'تحليل الهستوباثولوجي'],
    category: 'Biomarkers & Genetics',
    title: 'Oncology Pathology & Tumor Biomarker Interpretation Matrix',
    summary: 'Clinical framework for deciphering pathology reports, immunohistochemistry (IHC), and circulating tumor markers.',
    detailedProtocol: 'HER2 IHC: 0/1+ (Negative), 2+ (Equivocal -> FISH required), 3+ (Positive -> eligible for Trastuzumab/T-DXd). Ki-67 Proliferation Index: <15% (Low/Indolent), 15-30% (Intermediate), >30% (High proliferation). PD-L1 TPS/CPS: ≥1% (Positive), ≥50% (High expression -> eligible for Single-agent Pembrolizumab in NSCLC). MSI-H / dMMR: Predicts response to PD-1 blockade across all solid tumors.',
    indication: 'Comprehensive diagnostic guidance for interpreting solid tumor and hematologic lab reports.',
    dosingOrSchedule: 'Baseline tumor tissue molecular diagnostic profiling.',
    keyTrialReferences: [
      'ASCO / CAP Guidelines for HER2 Testing in Breast & Gastroesophageal Cancer.',
      'FDA Accelerated Approval for Pembrolizumab in MSI-H / dMMR Solid Tumors.'
    ],
    managementTips: [
      'CEA: Normal <2.5 ng/mL (non-smoker). Elevated in colorectal, gastric, breast, and pancreatic cancers; used for post-op recurrence monitoring.',
      'CA 125: Normal <35 U/mL. Key marker for epithelial ovarian cancer response monitoring and recurrence detection.',
      'PSA: Normal <4.0 ng/mL. Rapid PSA doubling time (<6 months) indicates high-risk prostate cancer velocity requiring prompt imaging.'
    ]
  },
  {
    id: 'kb-radiology-recist-petct',
    keywords: ['pet-ct', 'suvmax', 'recist', 'bi-rads', 'pi-rads', 'li-rads', 'lung-rads', 'ct scan', 'mri', 'تصوير بالأشعة', 'تقرير الأشعة'],
    category: 'Clinical Guidelines',
    title: 'Oncology Imaging & Radiology Report Decoding Framework (RECIST 1.1 & RADS Systems)',
    summary: 'Standardized radiologic criteria for evaluating tumor burden, response to therapy, and organ-specific risk stratification.',
    detailedProtocol: 'RECIST 1.1 Response Categories: Complete Response (CR: Disappearance of all target lesions), Partial Response (PR: ≥30% decrease in sum of target lesion diameters), Progressive Disease (PD: ≥20% increase in sum or new lesion), Stable Disease (SD). PET-CT SUVmax: Standardized Uptake Value indicating metabolic glucose avidity (SUV >2.5 typically suspicious for malignancy).',
    indication: 'Radiological assessment of CT, MRI, and PET scans across oncology clinical practice.',
    dosingOrSchedule: 'Routine baseline and post-treatment restaging scans every 8-12 weeks.',
    keyTrialReferences: [
      'Eisenhauer et al. (EJC 2009): New response evaluation criteria in solid tumours: Revised RECIST guideline (version 1.1).',
      'ACR (American College of Radiology) BI-RADS, PI-RADS, and LI-RADS Reporting Systems.'
    ],
    managementTips: [
      'BI-RADS 4/5: Requires prompt histopathological core needle biopsy (4 = Suspicious, 5 = Highly suggestive of malignancy).',
      'PI-RADS 4/5: High probability of clinically significant prostate cancer; indicates multiparametric MRI-guided targeted biopsy.',
      'LI-RADS 5: Definitive Hepatocellular Carcinoma (HCC) on contrast-enhanced CT/MRI; diagnostic without requiring invasive tissue biopsy.'
    ]
  },
  {
    id: 'kb-liver-hcc-atezo-bev',
    keywords: ['liver cancer', 'hcc', 'hepatocellular carcinoma', 'atezolizumab', 'bevacizumab', 'imbrave150', 'sorafenib', 'lenvatinib', 'afp', 'سرطان الكبد'],
    category: 'Immunotherapy',
    title: 'IMbrave150: Atezolizumab + Bevacizumab for Unresectable Hepatocellular Carcinoma',
    summary: 'First-line standard of care combining anti-PD-L1 checkpoint inhibitor with anti-VEGF anti-angiogenic therapy for advanced liver cancer.',
    detailedProtocol: 'Atezolizumab 1200 mg IV + Bevacizumab 15 mg/kg IV administered on Day 1 of a 21-day cycle (Q3W), continued until disease progression or unmanageable toxicity.',
    indication: 'Unresectable or metastatic Hepatocellular Carcinoma (HCC) with Child-Pugh Class A liver function and no untreated esophageal varices.',
    dosingOrSchedule: 'Every 3 weeks continuous IV infusion.',
    keyTrialReferences: [
      'IMbrave150 Trial (NEJM 2020): Atezolizumab plus Bevacizumab in Unresectable Hepatocellular Carcinoma.',
      'NCCN Clinical Practice Guidelines in Oncology: Hepatobiliary Cancers v1.2026.'
    ],
    managementTips: [
      'Perform Esophagogastroduodenoscopy (EGD) within 6 months prior to initiating Bevacizumab to evaluate and treat bleeding risk from esophageal varices.',
      'Monitor urine protein-to-creatinine ratio (UPCR) and systemic blood pressure before every Bevacizumab dose due to proteinuria and hypertension risks.',
      'Track Serum Alpha-Fetoprotein (AFP) levels as a serial biomarker for treatment response.'
    ]
  },
  {
    id: 'kb-kidney-rcc-pembro-axitinib',
    keywords: ['kidney cancer', 'rcc', 'renal cell carcinoma', 'pembrolizumab', 'axitinib', 'keynote-426', 'clear cell', 'sunitinib', 'سرطان الكلية'],
    category: 'Targeted Therapy',
    title: 'KEYNOTE-426: Pembrolizumab + Axitinib for Advanced Clear Cell Renal Cell Carcinoma',
    summary: 'First-line therapy combining PD-1 immunotherapy with a potent VEGFR-TKI targeted agent for metastatic clear cell RCC.',
    detailedProtocol: 'Pembrolizumab 200 mg IV Q3W (or 400 mg IV Q6W) PLUS Axitinib 5 mg PO BID continuous. Axitinib dose can be escalated to 7mg BID and 10mg BID if well tolerated without hypertension >150/90.',
    indication: 'Treatment-naïve advanced or metastatic clear cell Renal Cell Carcinoma (ccRCC) across IMDC risk groups.',
    dosingOrSchedule: 'Biweekly/Triweekly IO infusion with twice-daily oral TKI.',
    keyTrialReferences: [
      'KEYNOTE-426 Trial (NEJM 2019): Pembrolizumab plus Axitinib versus Sunitinib for Advanced Renal-Cell Carcinoma.',
      'EAU Guidelines on Renal Cell Carcinoma 2026.'
    ],
    managementTips: [
      'Manage Axitinib-induced hypertension aggressively with ACE-inhibitors or CCBs to maintain systolic BP <140 mmHg.',
      'Differentiate Axitinib diarrhea (responds to hold/dose reduction) from Pembrolizumab immune-mediated colitis (requires systemic corticosteroids).',
      'Monitor thyroid function (TSH) monthly; hypothyroidism occurs in over 35% of patients on VEGFR-TKI + IO.'
    ]
  },
  {
    id: 'kb-bladder-ev-pembro',
    keywords: ['bladder cancer', 'urothelial carcinoma', 'enfortumab vedotin', 'pembrolizumab', 'ev-302', 'padcev', 'cisplatin', 'gemcitabine', 'سرطان المثانة'],
    category: 'Targeted Therapy',
    title: 'EV-302: Enfortumab Vedotin + Pembrolizumab for Advanced Urothelial Carcinoma',
    summary: 'Groundbreaking Nectin-4 antibody-drug conjugate (ADC) combined with anti-PD-1 immunotherapy, doubling median survival over standard platinum chemotherapy.',
    detailedProtocol: 'Enfortumab Vedotin 1.25 mg/kg IV on Days 1 and 8 + Pembrolizumab 200 mg IV on Day 1 of a 21-day cycle.',
    indication: 'First-line systemic treatment for adult patients with locally advanced or metastatic urothelial (bladder) carcinoma.',
    dosingOrSchedule: '21-day cycles with EV administered Days 1 and 8.',
    keyTrialReferences: [
      'EV-302 / KEYNOTE-A39 Trial (NEJM 2024): Enfortumab Vedotin and Pembrolizumab in Advanced Urothelial Carcinoma.',
      'NCCN Guidelines for Bladder Cancer v1.2026.'
    ],
    managementTips: [
      'Monitor blood glucose closely; Enfortumab Vedotin can cause severe hyperglycemia and Diabetic Ketoacidosis (DKA) in non-diabetic and diabetic patients.',
      'Assess for peripheral neuropathy and severe dermatologic toxicity (Stevens-Johnson syndrome risk); hold treatment for Grade ≥2 skin reactions.',
      'Provide artificial tear eye drops to manage ocular side effects (dry eyes, keratitis).'
    ]
  },
  {
    id: 'kb-ovarian-carbo-taxol-olaparib',
    keywords: ['ovarian cancer', 'brca1', 'brca2', 'olaparib', 'carboplatin', 'paclitaxel', 'solo-1', 'parp inhibitor', 'ca-125', 'سرطان المبيض'],
    category: 'Targeted Therapy',
    title: 'Carboplatin + Paclitaxel Followed by Maintenance Olaparib for BRCA-Mutated Ovarian Cancer',
    summary: 'Platinum-based doublet chemotherapy followed by maintenance oral PARP inhibitor targeted therapy for BRCA-mutated advanced ovarian cancer.',
    detailedProtocol: 'Induction Phase: Carboplatin AUC 5-6 IV + Paclitaxel 175 mg/m² IV Q3W for 6 cycles. Maintenance Phase (SOLO-1): Olaparib 300 mg PO BID for up to 2 years in patients achieving complete or partial response.',
    indication: 'Newly diagnosed Stage III-IV high-grade serous or endometrioid ovarian, fallopian tube, or primary peritoneal cancer with germline or somatic BRCA1/2 mutation.',
    dosingOrSchedule: '6 cycles induction chemotherapy followed by 24 months continuous maintenance PARP inhibition.',
    keyTrialReferences: [
      'SOLO-1 Trial (NEJM 2018): Maintenance Olaparib in Patients with Newly Diagnosed Advanced Ovarian Cancer and a BRCA Mutation.',
      'PAOLA-1 Trial (NEJM): Olaparib plus Bevacizumab as First-Line Maintenance in Ovarian Cancer.'
    ],
    managementTips: [
      'Perform mandatory germline and somatic BRCA1/2 and HRD (Homologous Recombination Deficiency) tumor testing at initial diagnosis.',
      'Monitor CBC monthly during Olaparib maintenance; evaluate persistent anemia/thrombocytopenia for rare Myelodysplastic Syndrome (MDS) / AML.',
      'Serial CA-125 measurement every 3 months during follow-up to detect biochemical recurrence prior to symptomatic progression.'
    ]
  },
  {
    id: 'kb-melanoma-nivo-ipi-braf',
    keywords: ['melanoma', 'braf', 'v600e', 'dabrafenib', 'trametinib', 'nivolumab', 'ipilimumab', 'checkmate-067', 'skin cancer', 'سرطان الجلد', 'ميلانوما'],
    category: 'Immunotherapy',
    title: 'Dual Checkpoint Blockade (Nivolumab + Ipilimumab) & BRAF Targeted Therapy for Metastatic Melanoma',
    summary: 'High-efficacy dual anti-PD-1 + anti-CTLA-4 immunotherapy or BRAF/MEK targeted inhibitor combination for BRAF V600E mutant melanoma.',
    detailedProtocol: 'Option A (Dual IO - CheckMate-067): Nivolumab 1 mg/kg IV + Ipilimumab 3 mg/kg IV Q3W for 4 doses, followed by Nivolumab 240 mg Q2W. Option B (Targeted Therapy): Dabrafenib 150 mg PO BID + Trametinib 2 mg PO QD for BRAF V600E/K positive tumors.',
    indication: 'Unresectable Stage III or Stage IV metastatic cutaneous melanoma.',
    dosingOrSchedule: 'Dual IV immunotherapy induction Q3W or daily oral targeted therapy.',
    keyTrialReferences: [
      'CheckMate-067 Trial (NEJM): Overall Survival with Combined Nivolumab and Ipilimumab in Advanced Melanoma.',
      'COMBI-d / COMBI-v Trials: Dabrafenib plus Trametinib in BRAF V600-Mutated Metastatic Melanoma.'
    ],
    managementTips: [
      'Anticipate high incidence (~55%) of Grade 3/4 immune-mediated toxicities with dual Nivo+Ipi; educate patient on reporting diarrhea/colitis immediately.',
      'Dabrafenib/Trametinib can cause severe pyrexia (fever >38.5°C); instruct patient to hold both drugs temporarily during high fever episodes.',
      'Perform BRAF V600 mutation testing on tissue biopsy immediately upon diagnosis of advanced melanoma.'
    ]
  },
  {
    id: 'kb-gastric-nivo-folfox',
    keywords: ['gastric cancer', 'stomach cancer', 'checkmate-649', 'nivolumab', 'folfox', 'capox', 'her2', 'trastuzumab', 'سرطان المعدة'],
    category: 'Immunotherapy',
    title: 'CheckMate-649: Nivolumab + Chemotherapy for Advanced Gastric & Gastroesophageal Cancer',
    summary: 'Standard first-line regimen combining PD-1 inhibitor Nivolumab with fluoropyrimidine and platinum chemotherapy.',
    detailedProtocol: 'Nivolumab 360 mg IV + CAPOX (Capecitabine 1000 mg/m² PO BID Days 1-14 + Oxaliplatin 130 mg/m² IV Day 1 Q3W) OR Nivolumab 240 mg IV + mFOLFOX6 Q2W.',
    indication: 'First-line treatment of patients with advanced or metastatic gastric cancer, gastroesophageal junction (GEJ) adenocarcinoma, and esophageal adenocarcinoma.',
    dosingOrSchedule: 'Biweekly or triweekly combination cycles until progression.',
    keyTrialReferences: [
      'CheckMate-649 Trial (Lancet 2021): First-line Nivolumab plus Chemotherapy versus Chemotherapy alone for Advanced Gastric/GEJ Cancer.',
      'TOGA Trial (NEJM): Trastuzumab in combination with chemotherapy for HER2-positive advanced gastric cancer.'
    ],
    managementTips: [
      'Test HER2 status first: If HER2-positive (3+ IHC), use Trastuzumab + Chemotherapy + Pembrolizumab (KEYNOTE-811 regimen).',
      'Assess PD-L1 CPS (Combined Positive Score); maximum survival benefit seen in tumors with CPS ≥5.',
      'Monitor for oxaliplatin peripheral neuropathy and capecitabine hand-foot syndrome (Palmar-Plantar Erythrodysesthesia).'
    ]
  },
  {
    id: 'kb-thyroid-lenvatinib-rai',
    keywords: ['thyroid cancer', 'radioactive iodine', 'rai', 'lenvatinib', 'sorafenib', 'papillary', 'follicular', 'anaplastic', 'tg', 'سرطان الغدة الدرقية'],
    category: 'Targeted Therapy',
    title: 'Management of Differentiated & Anaplastic Thyroid Carcinoma (RAI & Multi-Kinase TKI)',
    summary: 'Total thyroidectomy followed by Radioactive Iodine (I-131) ablation and oral multi-kinase inhibitor Lenvatinib for RAI-refractory disease.',
    detailedProtocol: 'Differentiated Thyroid Cancer: Radioactive Iodine (I-131) 30-150 mCi post recombinant human TSH (Thyrogen). RAI-Refractory Metastatic Disease (SELECT Trial): Lenvatinib 24 mg PO daily. Anaplastic Thyroid Cancer (BRAF V600E): Dabrafenib 150mg PO BID + Trametinib 2mg PO QD.',
    indication: 'Papillary, Follicular, Hurthle cell, or Anaplastic thyroid carcinomas.',
    dosingOrSchedule: 'Oral continuous daily multi-kinase inhibitor or targeted therapy.',
    keyTrialReferences: [
      'SELECT Trial (NEJM 2015): Lenvatinib versus Placebo in Radioiodine-Refractory Thyroid Cancer.',
      'ATA (American Thyroid Association) Guidelines for Management of Thyroid Nodules and Differentiated Thyroid Cancer.'
    ],
    managementTips: [
      'Suppress serum TSH <0.1 mIU/L with Levothyroxine (Euthyrox/Synthroid) suppression therapy in high-risk differentiated thyroid cancer.',
      'Track Serum Thyroglobulin (Tg) and anti-Tg antibodies as sensitive tumor markers post total thyroidectomy + RAI ablation.',
      'Lenvatinib starting dose is high (24mg daily); manage hypertension, proteinuria, and weight loss with proactive dose titrations (20mg, 14mg, 10mg).'
    ]
  },
  {
    id: 'kb-myeloma-vrd-dara',
    keywords: ['multiple myeloma', 'vrd', 'daratumumab', 'bortezomib', 'lenalidomide', 'dexamethasone', 'bence jones', 'm spike', 'سرطان المايلوما المتعددة'],
    category: 'Targeted Therapy',
    title: 'D-VRd Quadruplet Regimen for Newly Diagnosed Multiple Myeloma',
    summary: 'Anti-CD38 monoclonal antibody Daratumumab combined with Velcade (Bortezomib), Revlimid (Lenalidomide), and Dexamethasone.',
    detailedProtocol: 'Daratumumab 1800 mg SC weekly Cycles 1-2, Q2W Cycles 3-6 + Bortezomib 1.3 mg/m² SC Days 1, 4, 8, 11 + Lenalidomide 25 mg PO Days 1-14 + Dexamethasone 20-40 mg PO Days 1, 8, 15, 22 of 21-day cycles.',
    indication: 'Newly diagnosed transplant-eligible or transplant-ineligible Multiple Myeloma.',
    dosingOrSchedule: '21-day induction cycles followed by autologous stem cell transplantation (ASCT) and maintenance Lenalidomide.',
    keyTrialReferences: [
      'GRIFFIN Trial (Blood): Daratumumab plus Bortezomib, Lenalidomide, and Dexamethasone in Newly Diagnosed Multiple Myeloma.',
      'PERSEUS Trial (NEJM 2024): Subcutaneous Daratumumab with VRd in Transplant-Eligible Multiple Myeloma.'
    ],
    managementTips: [
      'Administer Acyclovir/Valacyclovir herpes zoster prophylaxis continuously during Bortezomib and Daratumumab therapy.',
      'Prescribe full-dose Aspirin 81-325mg daily or LMWH (Enoxaparin) thromboprophylaxis due to high DVT/PE risk with Lenalidomide + Dexamethasone.',
      'Monitor serum protein electrophoresis (SPEP) for M-protein spike, quantitative immunoglobulins, and serum free light chains (K/L ratio).'
    ]
  },
  {
    id: 'kb-cart-cell-therapy',
    keywords: ['car-t', 'tisagenlecleucel', 'axicabtagene', 'crs', 'cytokine release syndrome', 'tocilizumab', 'icans', 'الخلايا التائية المعدلة جينيا'],
    category: 'Immunotherapy',
    title: 'CAR-T Cell Therapy Protocols & Management of Cytokine Release Syndrome (CRS / ICANS)',
    summary: 'Autologous chimeric antigen receptor (CAR) T-cell cellular immunotherapy directed against CD19 or BCMA targets.',
    detailedProtocol: 'Lymphodepleting Chemotherapy: Fludarabine 30 mg/m²/day + Cyclophosphamide 500 mg/m²/day IV for 3 days (Days -5, -4, -3), followed by single IV infusion of CAR-T cells (e.g., Kymriah, Yescarta, Carvykti) on Day 0.',
    indication: 'Relapsed/Refractory Large B-cell Lymphoma, B-ALL, or Multiple Myeloma after 2+ prior lines of systemic therapy.',
    dosingOrSchedule: 'Single autologous cellular infusion following 3-day conditioning chemotherapy.',
    keyTrialReferences: [
      'JULIET & ZUMA-1 Trials (NEJM): CAR-T Cell Therapy in Diffuse Large B-Cell Lymphoma.',
      'ASTCT Consensus Grading for Cytokine Release Syndrome and Neurological Toxicity Associated with Immune Effector Cells.'
    ],
    managementTips: [
      'CRS Fever & Hypotension (Grade ≥2): Immediately administer Tocilizumab 8 mg/kg IV (Anti-IL-6 receptor antibody) repeat Q8H up to 4 doses + IV fluids.',
      'ICANS (Immune effector cell-associated neurotoxicity syndrome): Administer IV Dexamethasone 10-20 mg Q6H; perform daily ICE score assessment.',
      'Monitor for prolonged cytopenias, B-cell aplasia, and hypogammaglobulinemia requiring IVIG supplementation.'
    ]
  },
  {
    id: 'kb-radiation-imrt-sbrt',
    keywords: ['radiation therapy', 'imrt', 'sbrt', 'srs', 'gamma knife', 'proton therapy', 'fractionation', 'gray', 'gy', 'العلاج الإشعاعي'],
    category: 'Clinical Guidelines',
    title: 'Radiation Oncology Modalities: IMRT, SBRT/SABR, SRS & Proton Beam Guidelines',
    summary: 'Advanced high-precision ionizing radiation technologies tailored for radical organ-sparing, stereotactic ablation, or palliative control.',
    detailedProtocol: 'IMRT/VMAT: 60-78 Gy in 30-39 fractions (1.8-2.0 Gy/fx) over 6-8 weeks for head/neck, prostate, lung. SBRT/SABR: Ultra-high dose 45-60 Gy delivered in 3-5 fractions over 1-2 weeks for early-stage lung, liver, spinal oligometastases. SRS (Gamma Knife): Single fraction 16-24 Gy for brain metastases.',
    indication: 'Definitive, neoadjuvant, adjuvant, or palliative radiation treatment across solid malignancies.',
    dosingOrSchedule: 'Daily fractionated external beam radiotherapy or targeted stereotactic ablation.',
    keyTrialReferences: [
      'ASTRO / ESTRO Clinical Practice Guidelines for Radiation Oncology.',
      'RTOG / NRG Oncology Stereotactic Body Radiation Therapy Guidelines.'
    ],
    managementTips: [
      'SBRT early-stage NSCLC achieves local control rates >90% comparable to surgical lobectomy in medically inoperable patients.',
      'Manage acute radiation dermatitis with topical Biafine, Aquaphor, or low-potency Hydrocortisone 1% cream; avoid metal-containing creams prior to radiation beam exposure.',
      'In head and neck IMRT, enforce strict dental evaluation and fluoride trays prior to radiation to prevent osteoradionecrosis of the jaw.'
    ]
  },
  {
    id: 'kb-sarcoma-gist-imatinib',
    keywords: ['sarcoma', 'gist', 'gastrointestinal stromal tumor', 'imatinib', 'gleevec', 'kit', 'pdgfra', 'sunitinib', 'ساركوما'],
    category: 'Targeted Therapy',
    title: 'Gastrointestinal Stromal Tumor (GIST): Targeted KIT/PDGFRA Therapy with Imatinib',
    summary: 'Tyrosine kinase inhibitor targeting c-KIT and PDGFRA oncogenic mutations in GIST.',
    detailedProtocol: 'Adjuvant Phase: Imatinib 400 mg PO daily for 3 years post-resection in high-risk GIST. Metastatic Phase: Imatinib 400 mg PO daily continuously (escalated to 800 mg daily for KIT Exon 9 mutations). Second-line: Sunitinib 50 mg daily 4 weeks on / 2 weeks off.',
    indication: 'c-KIT (CD117) positive gastrointestinal stromal tumors.',
    dosingOrSchedule: 'Continuous oral daily dosing with meal.',
    keyTrialReferences: [
      'SSG XVIII / AIO Trial (JAMA): 3 years vs 1 year of adjuvant imatinib for high-risk GIST.',
      'BFRG Trial: Long-term outcomes of imatinib treatment in metastatic GIST.'
    ],
    managementTips: [
      'Perform mutation analysis prior to treatment; KIT Exon 11 mutations respond best to 400mg, Exon 9 requires 800mg daily, PDGFRA D842V is resistant to imatinib (use Avapritinib).',
      'Manage common side effects: periorbital edema (morning facial swelling), mild fatigue, muscle cramps (calcium/magnesium supplementation), and nausea.',
      'Periodic CT scans every 3-6 months to assess response via Choi criteria (evaluates tumor density in addition to size).'
    ]
  },
  {
    id: 'kb-headneck-squamous-cisplatin',
    keywords: ['head and neck cancer', 'hnscc', 'cisplatin', 'cetuximab', 'p16', 'hpv', 'radiation', 'سرطان الرأس والرقبة'],
    category: 'Clinical Guidelines',
    title: 'Definitive Chemoradiation for Head & Neck Squamous Cell Carcinoma (HNSCC)',
    summary: 'Organ-preservation concurrent chemoradiotherapy with High-Dose Cisplatin.',
    detailedProtocol: 'Concurrent Phase: Cisplatin 100 mg/m² IV Q3W for 3 doses (Days 1, 22, 43) given concurrently with Intensity-Modulated Radiation Therapy (IMRT 70 Gy in 35 daily fractions). Alternative for Cisplatin-ineligible: Weekly Cetuximab 400 mg/m² loading dose, then 250 mg/m² IV weekly.',
    indication: 'Locally advanced Stage III-IV mucosal squamous cell carcinoma of the oral cavity, oropharynx, larynx, or hypopharynx.',
    dosingOrSchedule: 'Triweekly high-dose bolus cisplatin concurrent with 7-week daily radiotherapy.',
    keyTrialReferences: [
      'RTOG 91-11 Trial (NEJM): Chemoradiation for Organ Preservation in Advanced Laryngeal Cancer.',
      'Bonner et al. (NEJM): Radiotherapy plus Cetuximab for Head and Neck Cancer.'
    ],
    managementTips: [
      'Determine HPV/p16 status for oropharyngeal carcinomas; p16-positive tumors demonstrate significantly superior prognosis.',
      'Aggressive IV hydration (1L Normal Saline pre/post) + Mannitol forced diuresis to protect against Cisplatin nephrotoxicity.',
      'Proactive prophylactic gastrostomy tube (PEG tube) placement for patients at high risk of severe radiation mucositis and weight loss.'
    ]
  },
  {
    id: 'kb-esophageal-cross-regimen',
    keywords: ['esophageal cancer', 'cross regimen', 'carboplatin', 'paclitaxel', 'radiation', 'neoadjuvant', 'adenocarcinoma', 'سرطان المريء'],
    category: 'Chemotherapy Regimens',
    title: 'CROSS Regimen: Neoadjuvant Chemoradiotherapy for Esophageal & GEJ Cancer',
    summary: 'Standard preoperative chemoradiotherapy for resectable esophageal and gastroesophageal junction cancer.',
    detailedProtocol: 'Weekly Carboplatin AUC 2 IV + Paclitaxel 50 mg/m² IV for 5 weeks concurrently with Radiotherapy (41.4 Gy in 23 fractions), followed by esophagectomy 6-8 weeks later.',
    indication: 'Locally advanced resectable Stage II-III adenocarcinoma or squamous cell carcinoma of the esophagus/GEJ.',
    dosingOrSchedule: '5 weekly cycles with concurrent radiation prior to radical surgery.',
    keyTrialReferences: [
      'CROSS Trial (NEJM 2012): Preoperative Chemoradiotherapy for Oesophageal or Junctional Cancer.',
      'CheckMate-577 (NEJM 2021): Adjuvant Nivolumab in Resected Esophageal Cancer with Residual Disease.'
    ],
    managementTips: [
      'Achieves complete pathological response (pCR) in ~29% of adenocarcinomas and ~49% of squamous cell carcinomas.',
      'If residual pathological disease is present in surgical specimen post-resection, initiate Adjuvant Nivolumab 240mg Q2W for 1 year.',
      'Monitor nutritional status with weekly dietitian consultation during concurrent chemoradiation.'
    ]
  },
  {
    id: 'kb-cervical-pembro-chemorad',
    keywords: ['cervical cancer', 'pembrolizumab', 'cisplatin', 'brachytherapy', 'keynote-a18', 'hpv', 'سرطان عنق الرحم'],
    category: 'Immunotherapy',
    title: 'KEYNOTE-A18: Concurrent Chemoradiotherapy + Pembrolizumab for Cervical Cancer',
    summary: 'First-line therapy combining platinum-based chemoradiotherapy, brachytherapy, and PD-1 immunotherapy for high-risk cervical cancer.',
    detailedProtocol: 'Concurrent Phase: Cisplatin 40 mg/m² IV weekly x 5 doses with External Beam Radiation + Image-Guided Brachytherapy PLUS Pembrolizumab 200 mg IV Q3W x 5 doses, followed by maintenance Pembrolizumab 400 mg IV Q6W for 15 additional cycles.',
    indication: 'Newly diagnosed FIGO 2018 Stage III-IVA or Stage IB3-IIB node-positive cervical carcinoma.',
    dosingOrSchedule: 'Weekly concurrent cisplatin with triweekly pembrolizumab, followed by 2-year maintenance IO.',
    keyTrialReferences: [
      'KEYNOTE-A18 / ENGOT-cx11 Trial (Lancet 2024): Pembrolizumab plus Chemoradiotherapy for High-Risk Cervical Cancer.',
      'NCCN Guidelines for Cervical Cancer v1.2026.'
    ],
    managementTips: [
      'Brachytherapy completion within 50 days total treatment package time is crucial for optimal local tumor control.',
      'Screen for HPV high-risk subtypes (HPV 16/18) and assess PD-L1 expression.',
      'Monitor for radiation proctitis/cystitis and immune-mediated enterocolitis.'
    ]
  },
  {
    id: 'kb-breast-tdxd-enhertu',
    keywords: ['breast cancer', 'her2 low', 'her2 positive', 'enhertu', 'tdxd', 'trastuzumab deruxtecan', 'destiny-breast04', 'adc', 'علاج موجه ثدي'],
    category: 'Targeted Therapy',
    title: 'DESTINY-Breast04: Trastuzumab Deruxtecan (Enhertu) ADC for HER2-Positive & HER2-Low Breast Cancer',
    summary: 'HER2-directed antibody-drug conjugate (ADC) delivering topoisomerase I inhibitor payload with bystander tumor killing effect.',
    detailedProtocol: 'Trastuzumab Deruxtecan (T-DXd) 5.4 mg/kg IV infusion every 3 weeks (21-day cycle), continued until disease progression or unmanageable toxicity.',
    indication: 'Unresectable or metastatic HER2-positive (IHC 3+) or HER2-low (IHC 1+ or IHC 2+/FISH negative) invasive breast carcinoma after prior anti-HER2 or systemic therapy.',
    dosingOrSchedule: 'Triweekly IV infusion over 90 minutes (first dose) or 30 minutes (subsequent doses).',
    keyTrialReferences: [
      'DESTINY-Breast04 Trial (NEJM 2022): Trastuzumab Deruxtecan in HER2-Low Metastatic Breast Cancer.',
      'DESTINY-Breast03 Trial (NEJM 2021): Trastuzumab Deruxtecan versus Trastuzumab Emtansine (T-DM1) in HER2-Positive mBC.'
    ],
    managementTips: [
      'Monitor for Interstitial Lung Disease (ILD) / pneumonitis; perform baseline high-resolution chest CT and instruct patient to report new dry cough, fever, or dyspnea immediately.',
      'Hold T-DXd for Grade 1 asymptomatic ILD; permanently discontinue for Grade ≥2 ILD and initiate systemic corticosteroids (Prednisone 1 mg/kg/day).',
      'Pre-medicate with antiemetics (5-HT3 antagonist + Dexamethasone) for moderate emetogenic potential.'
    ]
  },
  {
    id: 'kb-breast-cdk46-abemaciclib',
    keywords: ['breast cancer', 'cdk4/6', 'abemaciclib', 'verzenio', 'ribociclib', 'kisqali', 'letrozole', 'fulvestrant', 'hr positive', 'her2 negative', 'سرطان الثدي الهرموني'],
    category: 'Targeted Therapy',
    title: 'CDK4/6 Inhibitor (Abemaciclib / Ribociclib) + Endocrine Therapy for HR+/HER2- Breast Cancer',
    summary: 'Cyclin-dependent kinase 4 and 6 inhibitors combined with Aromatase Inhibitor (Letrozole/Anastrozole) or Fulvestrant.',
    detailedProtocol: 'Adjuvant High-Risk (monarchE): Abemaciclib 150 mg PO BID continuous for 2 years PLUS Aromatase Inhibitor (Letrozole 2.5mg PO daily) for 5-10 years. Metastatic First-Line (MONALEESA-2): Ribociclib 600 mg PO daily for 21 days on / 7 days off PLUS Letrozole 2.5 mg PO daily.',
    indication: 'Early high-risk or metastatic Hormone Receptor Positive (HR+), HER2-Negative breast cancer.',
    dosingOrSchedule: 'Continuous daily oral Abemaciclib or 3-week on / 1-week off oral Ribociclib.',
    keyTrialReferences: [
      'monarchE Trial (JCO 2023): Adjuvant Abemaciclib Combined with Endocrine Therapy in HR+/HER2- Node-Positive Breast Cancer.',
      'MONALEESA-2 & MONALEESA-7 Trials (NEJM): Overall Survival with Ribociclib in Advanced HR+/HER2- Breast Cancer.'
    ],
    managementTips: [
      'Monitor ECG baseline and Day 14 for Ribociclib due to QTc interval prolongation risk; maintain serum potassium and magnesium in normal range.',
      'Abemaciclib causes diarrhea in ~80% of patients; provide Loperamide instructions at start of therapy (take 2mg at first loose stool).',
      'Monitor CBC baseline and every 2 weeks for first 2 months for neutropenia (more prominent with Palbociclib and Ribociclib).'
    ]
  },
  {
    id: 'kb-sclc-caspian-durvalumab',
    keywords: ['sclc', 'small cell lung cancer', 'durvalumab', 'imfinzi', 'atezolizumab', 'tecentriq', 'caspian', 'impower133', 'cisplatin', 'etoposide', 'سرطان الرئة صغير الخلايا'],
    category: 'Immunotherapy',
    title: 'CASPIAN / IMpower133: Durvalumab / Atezolizumab + Platinum-Etoposide for Extensive-Stage SCLC',
    summary: 'First-line chemo-immunotherapy combination establishing long-term overall survival improvement in Extensive-Stage Small Cell Lung Cancer.',
    detailedProtocol: 'CASPIAN Regimen: Durvalumab 1500 mg IV + Etoposide 80-100 mg/m² IV (Days 1-3) + Cisplatin 75 mg/m² (or Carboplatin AUC 5) IV (Day 1) every 21 days for 4 cycles, followed by maintenance Durvalumab 1500 mg IV Q4W.',
    indication: 'First-line treatment of adult patients with Extensive-Stage Small Cell Lung Cancer (ES-SCLC).',
    dosingOrSchedule: '4 induction 21-day cycles of chemo-IO followed by monthly maintenance immunotherapy.',
    keyTrialReferences: [
      'CASPIAN Trial (Lancet 2019): Durvalumab plus Platinum-Etoposide in Extensive-Stage Small-Cell Lung Cancer.',
      'IMpower133 Trial (NEJM 2018): First-Line Atezolizumab plus Chemotherapy in Extensive-Stage Small-Cell Lung Cancer.'
    ],
    managementTips: [
      'G-CSF support (Pegfilgrastim) recommended due to high rate of myelosuppression with platinum-etoposide.',
      'Evaluate for prophylactic cranial irradiation (PCI) or brain MRI surveillance in responding patients.',
      'Monitor thyroid function (TSH) and adrenal function (cortisol) for immune checkpoint inhibitor toxicities.'
    ]
  },
  {
    id: 'kb-lung-alk-alectinib',
    keywords: ['alk', 'alectinib', 'alecensa', 'brigatinib', 'lorlatinib', 'nsclc', 'targeted therapy', 'brain metastasis', 'أليكتاينيب', 'طفرة ALK'],
    category: 'Targeted Therapy',
    title: 'Alectinib (Alecensa) 2nd Generation ALK Inhibitor for ALK-Rearranged NSCLC',
    summary: 'Highly selective oral ALK tyrosine kinase inhibitor with exceptional blood-brain barrier penetration and central nervous system efficacy.',
    detailedProtocol: 'Alectinib 600 mg PO twice daily (taken with food), continued until disease progression or unacceptable toxicity.',
    indication: 'First-line treatment of patients with ALK-positive metastatic Non-Small Cell Lung Cancer, or adjuvant treatment in resected ALK+ NSCLC (ALINA trial).',
    dosingOrSchedule: 'Continuous daily oral administration (600mg BID = two 150mg capsules twice daily).',
    keyTrialReferences: [
      'ALEX Trial (NEJM 2017): Alectinib versus Crizotinib in Untreated ALK-Positive Non-Small-Cell Lung Cancer.',
      'ALINA Trial (NEJM 2024): Adjuvant Alectinib in Resected ALK-Positive NSCLC.'
    ],
    managementTips: [
      'Monitor liver enzymes (ALT, AST, Total Bilirubin) baseline and every 2 weeks for first 3 months.',
      'Instruct patient to report muscle pain, tenderness, or weakness; measure Creatine Kinase (CK) levels regularly due to myalgia risk.',
      'Monitor heart rate and blood pressure for symptomatic bradycardia.'
    ]
  },
  {
    id: 'kb-aml-7-3-midostaurin',
    keywords: ['aml', 'acute myeloid leukemia', '7+3', 'cytarabine', 'daunorubicin', 'midostaurin', 'flt3', 'rydapt', 'ratify', 'لوكيميا الدم الحادة'],
    category: 'Chemotherapy Regimens',
    title: '7+3 Induction + Midostaurin for FLT3-Mutated Acute Myeloid Leukemia (AML)',
    summary: 'Standard remission induction chemotherapy combined with target FLT3 receptor tyrosine kinase inhibitor.',
    detailedProtocol: 'Days 1-7: Cytarabine (Ara-C) 100-200 mg/m²/day continuous IV infusion x 7 days + Days 1-3: Daunorubicin 60 mg/m²/day IV push x 3 days + Days 8-21: Midostaurin 50 mg PO BID.',
    indication: 'Newly diagnosed Acute Myeloid Leukemia (AML) with FLT3 mutation (ITD or TKD).',
    dosingOrSchedule: '7-day induction phase with oral FLT3 inhibitor on Days 8-21, followed by consolidation High-Dose Cytarabine (HiDAC) + Midostaurin.',
    keyTrialReferences: [
      'RATIFY / CALGB 10603 Trial (NEJM 2017): Midostaurin plus Chemotherapy for Acute Myeloid Leukemia with a FLT3 Mutation.',
      'NCCN Guidelines for Acute Myeloid Leukemia v1.2026.'
    ],
    managementTips: [
      'Perform rapid FLT3 ITD/TKD mutation testing on peripheral blood or bone marrow aspirate within 7 days of AML presentation.',
      'Administer Midostaurin with food to decrease severe GI nausea and vomiting.',
      'Anticipate prolonged neutropenia and thrombocytopenia; provide broad-spectrum antibacterial, antifungal (Posaconazole), and antiviral prophylaxis.'
    ]
  },
  {
    id: 'kb-hodgkin-abvd-echelon1',
    keywords: ['hodgkin lymphoma', 'abvd', 'brentuximab', 'adcetris', 'echelon-1', 'doxorubicin', 'vinblastine', 'dacarbazine', 'bleomycin', 'سرطان الهودجكين'],
    category: 'Chemotherapy Regimens',
    title: 'ABVD & A+AVD Regimen for Classical Hodgkin Lymphoma',
    summary: 'Standard front-line therapy for Classical Hodgkin Lymphoma, replacing Bleomycin with CD30 antibody-drug conjugate Brentuximab Vedotin in advanced stage.',
    detailedProtocol: 'A+AVD Regimen (ECHELON-1): Brentuximab Vedotin 1.2 mg/kg IV + Doxorubicin 25 mg/m² IV + Vinblastine 3 mg/m² IV + Dacarbazine 375 mg/m² IV on Days 1 and 15 of a 28-day cycle for 6 cycles.',
    indication: 'Stage III or IV newly diagnosed Classical Hodgkin Lymphoma (or ABVD for early favorable/unfavorable stages).',
    dosingOrSchedule: 'Biweekly administration on Days 1 and 15 of 28-day cycles.',
    keyTrialReferences: [
      'ECHELON-1 Trial (NEJM 2018 / 2022 OS Update): Brentuximab Vedotin with Chemotherapy for Stage III or IV Hodgkin Lymphoma.',
      'RATHL Trial (NEJM): PET-guided therapy in Hodgkin Lymphoma.'
    ],
    managementTips: [
      'NEVER combine Brentuximab Vedotin with Bleomycin due to severe pulmonary toxicity risk.',
      'Perform interim PET-CT scan after Cycle 2 (Deauville score 1-3 = complete metabolic response).',
      'Provide primary G-CSF growth factor support (Pegfilgrastim) with A+AVD due to high neutropenic fever risk.'
    ]
  },
  {
    id: 'kb-sarcoma-osteosarcoma-map',
    keywords: ['osteosarcoma', 'sarcoma', 'map regimen', 'methotrexate', 'doxorubicin', 'cisplatin', 'leucovorin rescue', 'pediatric sarcoma', 'ساركوما العظام'],
    category: 'Pediatric Oncology',
    title: 'MAP Regimen (High-Dose Methotrexate, Doxorubicin, Cisplatin) for High-Grade Osteosarcoma',
    summary: 'Multi-agent neoadjuvant and adjuvant chemotherapy protocol for pediatric, adolescent, and young adult osteosarcoma.',
    detailedProtocol: 'Neoadjuvant Phase (10 weeks): High-Dose Methotrexate 12 g/m² IV over 4h with Leucovorin rescue + Cisplatin 100 mg/m² IV + Doxorubicin 75 mg/m² IV. Surgery at week 10, followed by 20 weeks adjuvant MAP chemotherapy.',
    indication: 'Newly diagnosed high-grade intramedullary osteosarcoma of extremities or pelvis in pediatric and adult patients.',
    dosingOrSchedule: '10-week pre-operative induction followed by surgical resection and 20-week post-operative consolidation.',
    keyTrialReferences: [
      'EURAMOS-1 Trial (Lancet Oncol): Methotrexate, Doxorubicin, and Cisplatin for Resectable Osteosarcoma.',
      'COG AOST0332 Clinical Protocol.'
    ],
    managementTips: [
      'High-Dose Methotrexate requires aggressive urinary alkalinization (IV Sodium Bicarbonate, urine pH >7.5) and hyperhydration (3 L/m²/day).',
      'Initiate PO/IV Leucovorin rescue at 24 hours post-methotrexate and titrate based on serial serum methotrexate levels until <0.1 mcM.',
      'Assess tumor necrosis percentage in resected surgical specimen (≥90% necrosis = good pathological response).'
    ]
  },
  {
    id: 'kb-prostate-pluvicto-lutetium',
    keywords: ['prostate cancer', 'pluvicto', 'lutetium-177', 'psma', 'radioligand', 'vision trial', 'mcrpc', 'لوتيشيوم', 'علاج إشعاعي موجه'],
    category: 'Targeted Therapy',
    title: 'VISION Trial: Lutetium-177-PSMA-617 (Pluvicto) Radioligand Therapy for mCRPC',
    summary: 'Targeted radiopharmaceutical delivering beta-particle radiation directly to Prostate-Specific Membrane Antigen (PSMA) expressing cancer cells.',
    detailedProtocol: 'Lutetium (177Lu) Vipivotide Tetraxetan 7.4 GBq (200 mCi) IV infusion every 6 weeks for up to 6 doses in combination with standard supportive care / androgen deprivation.',
    indication: 'PSMA-positive metastatic Castration-Resistant Prostate Cancer (mCRPC) previously treated with AR pathway inhibition and taxane-based chemotherapy.',
    dosingOrSchedule: 'Every 6 weeks IV infusion x 6 cycles maximum.',
    keyTrialReferences: [
      'VISION Trial (NEJM 2021): Lutetium-177-PSMA-617 for Metastatic Castration-Resistant Prostate Cancer.',
      'PSMAfore Trial (2023): Lutetium-177-PSMA-617 in Taxane-Naïve mCRPC.'
    ],
    managementTips: [
      'Mandatory baseline 68Ga-PSMA-11 or 18F-DCFPyL PET-CT scan confirming high PSMA expression in metastatic lesions prior to therapy.',
      'Monitor for dry mouth (xerostomia) due to physiological uptake in salivary glands.',
      'Evaluate renal function and bone marrow reserve (CBC) baseline and prior to each dose.'
    ]
  },
  {
    id: 'kb-endometrial-dostarlimab-ruby',
    keywords: ['endometrial cancer', 'dostarlimab', 'jemperli', 'pembrolizumab', 'ruby trial', 'msi-high', 'dmmr', 'lenvatinib', 'سرطان الرحم'],
    category: 'Immunotherapy',
    title: 'RUBY Trial: Dostarlimab + Carboplatin-Paclitaxel for Advanced / Recurrent Endometrial Cancer',
    summary: 'First-line PD-1 checkpoint inhibitor combined with standard platinum doublet chemotherapy, dramatically improving progression-free and overall survival in dMMR/MSI-H and pMMR endometrial cancer.',
    detailedProtocol: 'Dostarlimab 500 mg IV + Carboplatin AUC 5 IV + Paclitaxel 175 mg/m² IV Q3W for 6 cycles, followed by maintenance Dostarlimab 1000 mg IV Q6W for up to 3 years.',
    indication: 'Primary advanced (Stage III-IV) or first recurrent endometrial carcinoma.',
    dosingOrSchedule: '6 triweekly induction cycles followed by bi-monthly single-agent maintenance IO.',
    keyTrialReferences: [
      'RUBY Trial (NEJM 2023): Dostarlimab for Primary Advanced or Recurrent Endometrial Cancer.',
      'KEYNOTE-775 Trial (NEJM 2022): Pembrolizumab plus Lenvatinib in Advanced Endometrial Cancer.'
    ],
    managementTips: [
      'Mandatory IHC testing for Mismatch Repair proteins (MLH1, MSH2, MSH6, PMS2) on all endometrial biopsy specimens.',
      'In pMMR (mismatch repair proficient) recurrent endometrial cancer, Pembrolizumab + Lenvatinib is the preferred second-line targeted combination.',
      'Educate patient on recognizing immune-related adverse events (thyroid dysfunction, colitis, skin rash).'
    ]
  },
  {
    id: 'kb-triple-negative-pembro-keynote522',
    keywords: ['tnbc', 'triple negative breast cancer', 'pembrolizumab', 'keynote-522', 'neoadjuvant', 'carbo-paclitaxel', 'سرطان الثدي ثلاثي السلبية'],
    category: 'Immunotherapy',
    title: 'KEYNOTE-522: Neoadjuvant Pembrolizumab + Chemotherapy for Triple-Negative Breast Cancer (TNBC)',
    summary: 'FDA-approved standard of care adding anti-PD-1 checkpoint inhibitor Pembrolizumab to neoadjuvant chemotherapy for early-stage TNBC.',
    detailedProtocol: 'Neoadjuvant Phase (8 cycles): Pembrolizumab 200 mg IV Q3W + Carboplatin AUC 1.5 weekly (or AUC 5 Q3W) + Paclitaxel 80 mg/m² weekly x 12 weeks, followed by Pembrolizumab 200 mg Q3W + Cyclophosphamide 600 mg/m² + Doxorubicin 60 mg/m² (or Epirubicin) Q3W x 4 cycles. Adjuvant Phase: Post-surgery Pembrolizumab 200 mg IV Q3W x 9 cycles.',
    indication: 'High-risk early-stage Triple-Negative Breast Cancer (TNBC) (T1c N1-N2 or T2-T4 N0-N2).',
    dosingOrSchedule: '24 weeks preoperative chemo-immunotherapy followed by definitive surgery and 27 weeks adjuvant single-agent Pembrolizumab.',
    keyTrialReferences: [
      'KEYNOTE-522 Trial (NEJM 2020 / 2022 / 2024 Event-Free Survival Update): Pembrolizumab for Early Triple-Negative Breast Cancer.',
      'NCCN Guidelines for Invasive Breast Cancer v2.2026.'
    ],
    managementTips: [
      'Significant increase in Pathological Complete Response (pCR) rate from 51% to 65% across overall population.',
      'Monitor thyroid function tests (TSH/Free T4) and adrenal function prior to each Pembrolizumab cycle.',
      'In patients with residual invasive disease at surgery, consider adding adjuvant Olaparib (if germline BRCA1/2 mutation) or Capecitabine.'
    ]
  },
  {
    id: 'kb-pancreatic-gemcitabine-nabpaclitaxel',
    keywords: ['pancreatic cancer', 'gemcitabine', 'abraxane', 'nab-paclitaxel', 'folfirinox ineligible', 'سرطان البنكرياس جيمسيتابين'],
    category: 'Chemotherapy Regimens',
    title: 'Gemcitabine + Nab-Paclitaxel (Abraxane) for Metastatic Pancreatic Adenocarcinoma',
    summary: 'Standard first-line doublet chemotherapy for metastatic pancreatic adenocarcinoma, suitable for fit patients or those ineligible for FOLFIRINOX.',
    detailedProtocol: 'Nab-Paclitaxel 125 mg/m² IV over 30 minutes followed by Gemcitabine 1000 mg/m² IV over 30 minutes on Days 1, 8, and 15 of a 28-day cycle.',
    indication: 'First-line treatment of adult patients with metastatic pancreatic ductal adenocarcinoma.',
    dosingOrSchedule: 'Days 1, 8, 15 of a 28-day cycle continuously until disease progression or toxicity.',
    keyTrialReferences: [
      'MPACT Trial (NEJM 2013): Increased Survival in Pancreatic Cancer with Nab-Paclitaxel plus Gemcitabine.',
      'NCCN Guidelines for Pancreatic Adenocarcinoma v1.2026.'
    ],
    managementTips: [
      'Nab-paclitaxel solvent-free albumin formulation eliminates need for steroid premedication for hypersensitivity.',
      'Monitor for Grade ≥3 peripheral neuropathy (hold nab-paclitaxel until recovery to Grade ≤1, then reduce dose to 100mg/m²).',
      'Track CA 19-9 levels every 2 cycles to monitor therapeutic response velocity.'
    ]
  },
  {
    id: 'kb-colorectal-folfiri-bevacizumab',
    keywords: ['colorectal cancer', 'folfiri', 'bevacizumab', 'avastin', 'cetuximab', 'erbitux', 'ras wildtype', 'ras mutant', 'سرطان القولون المنتشر'],
    category: 'Chemotherapy Regimens',
    title: 'FOLFIRI + Bevacizumab or Cetuximab for Metastatic Colorectal Cancer (mCRC)',
    summary: 'Second-line or first-line chemotherapy triplet/doublet paired with anti-VEGF (Bevacizumab) or anti-EGFR (Cetuximab/Panitumumab) biologic agents.',
    detailedProtocol: 'Day 1: Irinotecan 180 mg/m² IV + Leucovorin 400 mg/m² IV + 5-FU 400 mg/m² bolus, then 5-FU 2400 mg/m² continuous infusion over 46 hours Q2W. Plus Bevacizumab 5 mg/kg IV Q2W OR Cetuximab 500 mg/m² IV Q2W (for KRAS/NRAS/BRAF Wild-type Left-sided tumors).',
    indication: 'Metastatic adenocarcinoma of the colon or rectum.',
    dosingOrSchedule: 'Biweekly 14-day cycles.',
    keyTrialReferences: [
      'FIRE-3 Trial (Lancet Oncol): FOLFIRI plus Cetuximab versus FOLFIRI plus Bevacizumab in KRAS Wild-Type mCRC.',
      'CALGB/SWOG 80405 Trial (JAMA): Cetuximab or Bevacizumab with Chemotherapy in mCRC.'
    ],
    managementTips: [
      'Mandatory extended RAS (KRAS/NRAS Exons 2, 3, 4) and BRAF V600E mutation testing; anti-EGFR antibodies (Cetuximab) are ineffective in RAS/BRAF mutant tumors.',
      'Left-sided primary tumors (descending colon/rectum) gain significant survival advantage with Anti-EGFR therapy in RAS wildtype.',
      'Manage Cetuximab acneiform rash with prophylactic oral Doxycycline 100mg BID and topical hydrocortisone 1% cream.'
    ]
  },
  {
    id: 'kb-diabetes-t2d-management',
    keywords: ['diabetes', 't2d', 'sugar', 'insulin', 'metformin', 'empagliflozin', 'semaglutide', 'hba1c', 'السكري', 'علاج السكر', 'انسولين'],
    category: 'Cardiology & Metabolic',
    title: 'Type 2 Diabetes Mellitus: Comprehensive Diagnostic & Treatment Guidelines (ADA 2026)',
    summary: 'Evidence-based management of T2D incorporating glucose control with cardiorenal and weight loss organ protection.',
    detailedProtocol: 'Diagnostic Criteria: Fasting Plasma Glucose ≥126 mg/dL, 2-hour OGTT ≥200 mg/dL, or HbA1c ≥6.5%. First-Line Pharmacotherapy: Metformin 500-1000 mg PO BID + Lifestyle modifications. Cardiorenal Protection Add-ons: SGLT2 Inhibitors (Empagliflozin 10-25mg PO daily or Dapagliflozin 10mg PO daily) for CKD/Heart Failure, OR GLP-1 Receptor Agonists (Semaglutide 0.5-2.0mg SC weekly or Tirzepatide) for ASCVD/Obesity. Insulin Initiation: Basal Insulin Glargine/Degludec 10 units SC at bedtime if HbA1c >10% or symptomatic hyperglycemia.',
    indication: 'Type 2 Diabetes Mellitus in adults and adolescents with metabolic and cardiovascular risk factors.',
    dosingOrSchedule: 'Daily oral medication and weekly or daily subcutaneous injections with HbA1c testing every 3 months.',
    keyTrialReferences: [
      'ADA Standards of Care in Diabetes 2026.',
      'EMPA-REG OUTCOME & DECLARE-TIMI 58 Trials: Cardiorenal protection with SGLT2 inhibitors.'
    ],
    managementTips: [
      'Target HbA1c <7.0% for most non-pregnant adults; individualize to <8.0% for elderly patients with severe hypoglycemia risks.',
      'SGLT2 inhibitors significantly reduce risk of diabetic nephropathy progression and heart failure hospitalizations regardless of baseline HbA1c.',
      'Assess for microvascular complications annually: spot urine albumin-to-creatinine ratio (UACR), dilated eye exam, and monofilament foot testing.'
    ]
  },
  {
    id: 'kb-cardio-hypertension-guidelines',
    keywords: ['hypertension', 'blood pressure', 'htn', 'lisinopril', 'amlodipine', 'valsartan', 'chlorthalidone', 'ضغط الدم', 'ارتفاع الضغط'],
    category: 'Cardiology & Metabolic',
    title: 'Essential Hypertension: ACC/AHA Diagnostic & Stepped Pharmacotherapy Guidelines',
    summary: 'Clinical diagnosis and step-care pharmacological management of high blood pressure.',
    detailedProtocol: 'BP Classification: Normal (<120/80), Elevated (120-129/<80), Stage 1 (130-139/80-89), Stage 2 (≥140/90 mmHg). First-Line Monotherapy (Stage 1 with ASCVD risk ≥10% or Stage 2): ACE-Inhibitor (Lisinopril 10-40mg PO daily), ARB (Valsartan 80-320mg PO daily), Dihydropyridine CCB (Amlodipine 5-10mg PO daily), or Thiazide-like Diuretic (Chlorthalidone 12.5-25mg PO daily). Initial Dual Therapy (BP >20/10 mmHg over goal): ACEi/ARB + CCB or Thiazide.',
    indication: 'Primary (essential) and secondary hypertension in adult patients.',
    dosingOrSchedule: 'Continuous daily oral administration with home blood pressure monitoring.',
    keyTrialReferences: [
      'ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.',
      'SPRINT Trial (NEJM): Intensive blood pressure lowering (<120 mmHg) reduces cardiovascular mortality.'
    ],
    managementTips: [
      'Target BP <130/80 mmHg for all adult patients with hypertension.',
      'Use ACE-Inhibitor or ARB as first-line choice in patients with diabetic nephropathy or chronic kidney disease with albuminuria.',
      'Monitor serum potassium and creatinine 1-2 weeks after initiating or titrating ACE-inhibitor/ARB or diuretic therapy.'
    ]
  },
  {
    id: 'kb-cardio-acs-mi-guidelines',
    keywords: ['acute coronary syndrome', 'heart attack', 'mi', 'stemi', 'nstemi', 'aspirin', 'clopidogrel', 'ticagrelor', 'heparin', 'جلطة قلبية', 'ذبحة صدرية'],
    category: 'Cardiology & Metabolic',
    title: 'Acute Coronary Syndrome (STEMI / NSTEMI) & Ischemic Heart Disease Protocol',
    summary: 'Emergency diagnostic triage and immediate pharmacological/revascularization protocol for myocardial infarction.',
    detailedProtocol: 'Immediate Triage: 12-lead ECG within 10 minutes + High-Sensitivity Cardiac Troponin. Acute Emergency Pharmacotherapy: Aspirin 325 mg PO chewed immediately + P2Y12 Inhibitor (Ticagrelor 180 mg loading dose, then 90 mg PO BID OR Clopidogrel 600 mg load) + Anticoagulation (Unfractionated Heparin 60 units/kg IV bolus or Enoxaparin 1 mg/kg SC) + Sublingual Nitroglycerin 0.4 mg Q5min x3 for chest pain. STEMI Management: Emergent Primary Percutaneous Coronary Intervention (PCI) within 90 minutes door-to-balloon time (or Thrombolysis with Tenecteplase if PCI unavailable within 120 min). Long-Term Secondary Prevention: High-intensity Statin (Atorvastatin 80mg PO daily) + Beta-blocker (Metoprolol Succinate) + ACEi.',
    indication: 'ST-Elevation Myocardial Infarction (STEMI), Non-ST-Elevation MI (NSTEMI), and Unstable Angina.',
    dosingOrSchedule: 'Stat emergency acute administration followed by chronic daily dual antiplatelet therapy (DAPT) for 12 months.',
    keyTrialReferences: [
      'ACC/AHA Guidelines for Management of ST-Elevation and Non-ST-Elevation Acute Coronary Syndromes.',
      'PLATO Trial (NEJM): Ticagrelor versus Clopidogrel in Patients with Acute Coronary Syndromes.'
    ],
    managementTips: [
      'Dual Antiplatelet Therapy (Aspirin + Ticagrelor/Clopidogrel) indicated for at least 12 months post-stent placement.',
      'Contraindications to sublingual Nitroglycerin: Right ventricular infarction, severe aortic stenosis, or recent use of PDE-5 inhibitors (Sildenafil/Tadalafil) within 24-48 hours.',
      'High-intensity statin therapy (Atorvastatin 80mg) should be initiated in all ACS patients regardless of baseline LDL-C.'
    ]
  },
  {
    id: 'kb-neurology-stroke-protocol',
    keywords: ['stroke', 'ischemic stroke', 'tia', 'tpa', 'alteplase', 'tenecteplase', 'thrombectomy', 'aspirin', 'جلطة دماغية', 'السكتة الدماغية'],
    category: 'Neurology & Emergency',
    title: 'Acute Ischemic Stroke: Diagnostic Workup, Intravenous Thrombolysis & Thrombectomy',
    summary: 'Emergency neurology protocol for hyperacute stroke intervention and secondary stroke prevention.',
    detailedProtocol: 'Emergency Triage: Non-contrast CT Head immediately to rule out intracranial hemorrhage + Fingerstick blood glucose + NIH Stroke Scale (NIHSS). Intravenous Thrombolysis: Tenecteplase 0.25 mg/kg IV single bolus (or Alteplase 0.9 mg/kg IV over 60 min) administered within 4.5 hours of last known normal. Endovascular Thrombectomy (EVT): Mechanical clot retrieval within 24 hours for Large Vessel Occlusion (LVO) of anterior circulation. Antiplatelet Management: Aspirin 160-325 mg PO started 24 hours post-thrombolysis (or immediately if thrombolysis not given). Dual Antiplatelet (Aspirin + Clopidogrel) for 21 days in minor stroke (NIHSS ≤3) or high-risk TIA.',
    indication: 'Acute ischemic cerebrovascular event with neurological deficit.',
    dosingOrSchedule: 'Hyperacute emergency administration with strict contraindication screening.',
    keyTrialReferences: [
      'AHA/ASA Guidelines for the Early Management of Patients With Acute Ischemic Stroke.',
      'EXTEND-IA & MR CLEAN Trials (NEJM): Endovascular thrombectomy for acute ischemic stroke.'
    ],
    managementTips: [
      'Strict blood pressure control (<185/110 mmHg prior to thrombolysis, and <180/105 mmHg for 24 hours post-thrombolysis).',
      'Absolute contraindications to tPA: Active internal bleeding, intracranial hemorrhage history, recent head trauma/surgery within 3 months, platelet count <100,000, INR >1.7.',
      'Perform CT Angiography (CTA) head/neck concurrently to identify large vessel occlusion eligible for mechanical thrombectomy.'
    ]
  },
  {
    id: 'kb-infectious-sepsis-bundle',
    keywords: ['sepsis', 'septic shock', 'ceftriaxone', 'vancomycin', 'zosyn', 'piperacillin', 'lactate', 'norepinephrine', 'تسمم الدم', 'الصدمة الانتانبة'],
    category: 'Infectious Disease & Pharmacology',
    title: 'Sepsis & Septic Shock: Hour-1 Emergency Resuscitation & Empiric Antimicrobial Bundle',
    summary: 'Surviving Sepsis Campaign evidence-based bundle for rapid sepsis identification and septic shock resuscitation.',
    detailedProtocol: 'Diagnostic Workup: Serum Lactate + Blood cultures x2 sets prior to antibiotics. Hour-1 Resuscitation Bundle: 1) Administer broad-spectrum IV antibiotics within 1 hour. 2) Administer 30 mL/kg IV crystalloids (Balanced Crystalloids like Plasmalyte/Lactated Ringer\'s) within 3 hours for hypotension or lactate ≥4 mmol/L. 3) Initiate vasopressors (Norepinephrine IV continuous infusion titrated to target Mean Arterial Pressure MAP ≥65 mmHg) for refractory septic shock. Empiric Broad-Spectrum Coverage: Piperacillin-Tazobactam (Zosyn) 4.5 g IV Q6H + Vancomycin 15-20 mg/kg IV Q8-12H (or Meropenem 1 g IV Q8H if severe penicillin allergy or ESBL risk).',
    indication: 'Sepsis (Sequential Organ Failure Assessment SOFA score increase ≥2) and Septic Shock.',
    dosingOrSchedule: 'Immediate emergency IV boluses and continuous vasopressor titration.',
    keyTrialReferences: [
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026.',
      'PRISM Investigators (NEJM): Early goal-directed therapy versus standard care in sepsis.'
    ],
    managementTips: [
      'Reassess serum lactate within 2-4 hours to evaluate clearance during fluid resuscitation.',
      'Norepinephrine is the first-choice vasopressor; add Vasopressin (0.03 units/min) if MAP remains below target despite rising norepinephrine doses.',
      'De-escalate antibiotic spectrum as soon as microbiological culture and susceptibility results become available (usually at 48 hours).'
    ]
  },
  {
    id: 'kb-respiratory-asthma-copd',
    keywords: ['asthma', 'copd', 'albuterol', 'salbutamol', 'budesonide', 'formoterol', 'prednisone', 'ipratropium', 'الربو', 'الانسداد الرئوي المزمن'],
    category: 'General Internal Medicine',
    title: 'Bronchial Asthma & COPD Exacerbation: Maintenance & Emergency Protocols (GINA / GOLD 2026)',
    summary: 'Global guidelines for step-wise management of bronchial asthma and COPD exacerbations.',
    detailedProtocol: 'Asthma Step 1-2 Maintenance (GINA): As-needed Low-Dose Inhaled Corticosteroid (ICS) + Formoterol (Budesonide/Formoterol 160/4.5 mcg 1-2 puffs as needed for rescue and pre-exercise). Asthma Severe Maintenance: High-dose ICS/LABA + LAMA (Tiotropium) + Biologic therapy (Omalizumab for allergic or Dupilumab for eosinophilic asthma). Acute Asthma/COPD Exacerbation Management: Salbutamol (Albuterol) 2.5-5 mg + Ipratropium Bromide 0.5 mg nebulized every 20 minutes x 3 doses + Systemic Corticosteroids (Prednisolone 40-50 mg PO daily for 5 days) + Supplemental Oxygen to target SpO2 93-95% (or 88-92% in hypercapnic COPD). COPD Antibiotics: Amoxicillin-Clavulanate 875/125 mg PO BID or Azithromycin 500 mg daily x 3-5 days if purulent sputum.',
    indication: 'Reversible bronchospasm (Asthma) and chronic airflow limitation (COPD).',
    dosingOrSchedule: 'Inhaled daily controller and as-needed bronchodilators with short-course oral steroid burst during acute flare-ups.',
    keyTrialReferences: [
      'GINA (Global Initiative for Asthma) Main Report 2026.',
      'GOLD (Global Initiative for Chronic Obstructive Lung Disease) Strategy Report 2026.'
    ],
    managementTips: [
      'GINA no longer recommends SABA (Albuterol) monotherapy due to risk of severe asthma exacerbations and mortality; ICS-Formoterol is the preferred reliever.',
      'In COPD patients with frequent exacerbations and blood eosinophils ≥300 cells/mcL, add Inhaled Corticosteroid (Triple Therapy: ICS+LABA+LAMA).',
      'Check proper inhaler technique (spacer device usage) at every clinical encounter.'
    ]
  }
];

/**
 * Knowledge Base Retrieval Function (RAG Engine)
 * Matches user query keywords against embedded knowledge entries instantly
 */
export function searchKnowledgeBase(query: string): KnowledgeEntry[] {
  if (!query || query.trim().length === 0) return [];

  const normalizedQuery = query.toLowerCase();
  const tokens = normalizedQuery.split(/\s+/).filter(t => t.length > 2);

  const matched = ONCOLOGY_KNOWLEDGE_BASE.filter(entry => {
    // Check keyword match
    const keywordMatch = entry.keywords.some(kw => normalizedQuery.includes(kw.toLowerCase()));
    if (keywordMatch) return true;

    // Check title or summary match
    const titleMatch = entry.title.toLowerCase().includes(normalizedQuery);
    const summaryMatch = entry.summary.toLowerCase().includes(normalizedQuery);
    if (titleMatch || summaryMatch) return true;

    // Token-based matching
    const tokenMatches = tokens.filter(t => 
      entry.title.toLowerCase().includes(t) ||
      entry.summary.toLowerCase().includes(t) ||
      entry.detailedProtocol.toLowerCase().includes(t) ||
      entry.indication.toLowerCase().includes(t)
    );

    return tokenMatches.length >= 2;
  });

  return matched;
}
