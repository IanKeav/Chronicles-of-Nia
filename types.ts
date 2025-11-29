export interface Character {
  id: string;
  name: string;
  nickname?: string;
  role: string;
  description: string;
  appearance: string;
  personality: string;
  imagePrompt: string; // Used to generate the placeholder image
  color: string; // Tailwind border/accent color
}

export enum ViewMode {
  GRID = 'GRID',
  LIST = 'LIST'
}