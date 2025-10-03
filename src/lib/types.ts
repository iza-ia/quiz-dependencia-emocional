export interface QuizQuestion {
  id: number;
  question: string;
  type: 'multiple' | 'open';
  options?: string[];
  category: 'attachment' | 'jealousy' | 'self_esteem' | 'control' | 'fear';
}

export interface QuizAnswer {
  questionId: number;
  answer: string | number;
  score?: number;
}

export interface QuizResult {
  totalScore: number;
  level: 'low' | 'moderate' | 'high';
  categoryScores: {
    attachment: number;
    jealousy: number;
    self_esteem: number;
    control: number;
    fear: number;
  };
  answers: QuizAnswer[];
  email?: string;
  completedAt: Date;
}

export interface UserSession {
  id: string;
  email?: string;
  quizResult?: QuizResult;
  hasPaid: boolean;
  createdAt: Date;
}