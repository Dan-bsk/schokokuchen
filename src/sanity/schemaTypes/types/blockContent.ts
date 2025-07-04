import type { PortableTextBlock } from './author'; // oder du kannst es hier direkt definieren

export type BlockContent = PortableTextBlock[];


export interface Category {
  _id: string;
  _type: 'category';
  title: string;
  slug?: {
    _type: 'slug';
    current: string;
  };
}
