
export interface Gig {
  id: string;
  title: string;
  company: string;
  payout: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
