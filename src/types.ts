export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  clientContext: string;
  auditSolution: string;
  execution: string;
  outcome: string;
  slug: string;
}

export type Category = 
  | "Revenue Growth"
  | "Operational Efficiency"
  | "Governance, Compliance & Risk"
  | "Customer & Employee Experience"
  | "Digital Platforms & Scale";

export const CATEGORIES: Category[] = [
  "Revenue Growth",
  "Operational Efficiency",
  "Governance, Compliance & Risk",
  "Customer & Employee Experience",
  "Digital Platforms & Scale"
];
