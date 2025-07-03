import { defineQuery } from 'next-sanity';

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id,
  _type,
  title,
  slug,
  publishedAt,
  author->{_id, name, image},  // Referenzen per join laden
  mainImage{
    _type,
    asset->{_id, url},
    hotspot,
    alt
  },
  categories[]->{_id, title}
}`);

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  body,
  slug,
  publishedAt,
  author->{_id, name, image},
  mainImage{
    _type,
    asset->{_id, url},
    hotspot,
    alt
  },
  categories[]->{_id, title}
}`);
