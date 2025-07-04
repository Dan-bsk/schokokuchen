import type { BlockContent } from './blockContent';

/**
 * Der Post-Typ für Abfragen mit `author->` und `categories[]->` aus `POST_QUERY`
 */
export interface POST_QUERYResult {
  _id: string;
  title: string;
  body?: BlockContent;
  mainImage?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    alt?: string;
  };
  publishedAt?: string;
  categories?: {
    _id: string;
    slug?: {
      current: string;
    };
    title: string;
  }[];
  author?: {
    name: string;
    image?: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  };
}
export interface POSTS_QUERYResult {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  body?: BlockContent;
  mainImage?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    alt?: string;
  };
  publishedAt?: string;
  categories?: {
    _id: string;
    slug?: {
      current: string;
    };
    title: string;
  }[];
  author?: {
    name: string;
    image?: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  };
}
