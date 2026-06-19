export type Lang = 'es' | 'en' | 'ca';

export interface LinkItem {
  text: string;
  url: string;
}

export interface TimelineItem {
  title: string;
  content: string;
  color: string;
  links?: LinkItem[];
}

export interface Repo {
  title: string;
  url: string;
  image: string;
  tags: string[];
  descriptions: Record<Lang, string>;
}

export interface Video {
  title: Record<Lang, string>;
  url: string;
  image: string;
  tags: string[];
  descriptions: Record<Lang, string>;
}
