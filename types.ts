
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  icon?: JSX.Element;
}

export enum ChatMessageSender {
  USER = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  sender: ChatMessageSender;
  text: string;
}