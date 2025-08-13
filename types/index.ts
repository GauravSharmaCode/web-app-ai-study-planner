export interface User {
  userId: string;
  email: string;
  token: string;
}

export interface StudyPlan {
  planId: string;
  topic: string;
  durationDays: number;
  planJson: Record<string, string>;
  createdAt: string;
}

export interface ProgressSession {
  progressId: string;
  planId: string;
  sessionDate: string;
  remarks: string;
  completed: boolean;
}

export interface PlanGenerationRequest {
  topic: string;
  durationDays: number;
}

export interface AuthRequest {
  email: string;
  password: string;
}