export interface Author {
  _id: string
  _type: 'author'
  name: string
  slug?: {
    _type: 'slug'
    current: string
  }
  image?: {
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
  }
  bio?: PortableTextBlock[]
}

export interface PortableTextBlock {
  _key?: string
  _type: 'block'
  style?: string
  children: Array<{
    _key?: string
    _type: 'span'
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: 'link'
    href: string
  }>
  listItem?: string
}
