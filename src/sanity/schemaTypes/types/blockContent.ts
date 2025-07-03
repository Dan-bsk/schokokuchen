export type BlockContent = Array<Block | ImageBlock>
export interface Block {
  _key?: string
  _type: 'block'
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
  listItem?: 'bullet'
  children: Span[]
  markDefs?: MarkDef[]
}
export interface Span {
  _key?: string
  _type: 'span'
  text: string
  marks?: string[] // z.B. ['strong', 'em', 'link1']
}
export type MarkDef = LinkMarkDef
export interface LinkMarkDef {
  _key?: string
  _type: 'link'
  href: string
}
export interface ImageBlock {
  _key?: string
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
