import { POST_QUERYResult } from '@/sanity/schemaTypes/types/post'
import dayjs from 'dayjs'

type PublishedAtProps = {
  publishedAt: NonNullable<POST_QUERYResult>['publishedAt']
}

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <p className="text-base text-slate-700">
      {dayjs(publishedAt).format('D MMMM YYYY')}
    </p>
  ) : null
}