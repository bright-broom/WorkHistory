export interface Experience {
  id: string;
  company: string;
  period: string;
  role: string;
  description: string;
  achievements: string;
  reason?: string;
}

export interface SkillItem {
  name: string;
  items: string[];
}

export interface Certification {
  date: string;
  name: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface SelfPR {
  title: string;
  content: string;
}

export interface ResumeHeader {
  name: string;
  title: string;
  updatedAt: string;
  github: string;
}

export interface ResumeData {
  header: ResumeHeader;
  summary: string;
  skills: SkillItem[];
  experiences: Experience[];
  certifications: Certification[];
  languages: Language[];
  selfPR: SelfPR[];
}
