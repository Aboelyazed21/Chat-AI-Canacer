/**
 * OncoCare AI - Global Type Definitions
 */

export type Language = 'en' | 'ar';

export type Role = 'user' | 'assistant' | 'system';

export interface MedicalCitation {
  id: string;
  source: 'NCI' | 'PubMed' | 'ClinicalTrials.gov' | 'FDA' | 'RxNorm' | 'MedlinePlus' | 'ICD-10';
  title: string;
  url: string;
  snippet?: string;
  date?: string;
}

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  timestamp: string;
  language?: Language;
  structuredResponse?: {
    summary: string;
    detailedExplanation: string;
    symptoms?: string[];
    riskFactors?: string[];
    diagnosisAndStaging?: string;
    treatmentOptions?: string[];
    sideEffects?: string[];
    medications?: string[];
    clinicalTrialsSummary?: string;
    nutritionAdvice?: string;
    references: MedicalCitation[];
    confidenceScore: number; // e.g. 98
    medicalDisclaimer: string;
  };
  attachments?: {
    type: 'image' | 'pdf' | 'text';
    name: string;
    url?: string;
    previewText?: string;
  }[];
  isStreaming?: boolean;
}

export interface ClinicalTrial {
  id: string;
  nctId: string;
  title: string;
  officialTitle?: string;
  phase: string;
  status: string;
  conditions: string[];
  interventions: string[];
  summary: string;
  eligibility: string;
  locations: { name: string; city: string; state?: string; country: string }[];
  sponsor: string;
  contactEmail?: string;
  url: string;
}

export interface DrugInteraction {
  drugA: string;
  drugB: string;
  severity: 'High' | 'Moderate' | 'Low' | 'No Known Interaction';
  description: string;
  mechanism?: string;
  recommendation: string;
  source: string;
}

export interface CancerCenter {
  id: string;
  name: string;
  type: 'NCI-Comprehensive' | 'NCI-Designated' | 'Specialized Radiation Center' | 'Academic Medical Center';
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website: string;
  lat: number;
  lng: number;
  specialties: string[];
}

export interface MedicationReminder {
  id: string;
  drugName: string;
  dosage: string;
  frequency: 'Daily' | 'Twice Daily' | 'Weekly' | 'Custom';
  time: string; // "08:00"
  notes?: string;
  active: boolean;
}

export interface AppointmentReminder {
  id: string;
  doctorName: string;
  facility: string;
  appointmentType: 'Oncology Checkup' | 'Chemotherapy' | 'Radiation Therapy' | 'Lab Work' | 'Imaging Scan';
  date: string;
  time: string;
  notes?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  language: Language;
  diagnosisHistory?: {
    cancerType?: string;
    stage?: string;
    diagnosedDate?: string;
    currentTreatments?: string[];
    primaryOncologist?: string;
  };
  isLoggedIn: boolean;
  isAdmin?: boolean;
}

export interface SystemHealth {
  status: 'Healthy' | 'Degraded' | 'Offline';
  latencyMs: number;
  uptimeSeconds: number;
  activeApiKeys: {
    gemini: boolean;
    clinicalTrials: boolean;
    pubmed: boolean;
    openFda: boolean;
    rxNorm: boolean;
  };
  requestCount24h: number;
  cacheHitRatio: number;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  action: string;
  user: string;
  details: string;
  status: 'Success' | 'Warning' | 'Error';
}
