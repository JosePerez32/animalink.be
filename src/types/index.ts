export interface Character {
  id: string;
  name: string;
  slug: string;
  role: string;
  species: string;
  status: "available" | "coming_soon";
  emoji?: string;
  bannerGradient: string;
  shortBio: string;
  fullLore: string;
  traits: string[];
  emotionalTone: string;
  chatPreview: ChatMessage[];
  roadmapHint: string;
  faction: string;
  featured: boolean;
  badge?: string;
  image?: string;
  bannerImage?: string;
}

export interface ChatMessage {
  role: "ai" | "user";
  text: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  featured?: boolean;
  icon?: string;
}

export interface LoreEntry {
  id: string;
  title: string;
  content: string[];
  quote?: string;
  icon: string;
}
