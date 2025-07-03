// src/types/category.ts
export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug?: {
    _type: 'slug'
    current: string
  }
  description?: string
}
