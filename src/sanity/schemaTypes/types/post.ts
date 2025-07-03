// src/types/post.ts
import type { Author } from './author'
import type { Category } from './category'
import type { BlockContent } from './blockContent'

export interface Post {
  _id: string
  _type: 'post'
  title: string
  slug?: {
    _type: 'slug'
    current: string
  }
  author?: {
    _type: 'reference'
    _ref: string
  } | Author
  mainImage?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
    alt?: string
  }
  categories?: Array<{
    _type: 'reference'
    _ref: string
  } | Category>
  publishedAt?: string // ISO Datetime
  body?: BlockContent
}

