import type { NextApiResponse } from 'next'
import { articles } from '../../../data'

export default function handler(
  { query }: { query: { id: string }},
  res: NextApiResponse
) {
  const filtered = articles.filter((article) => article.id === query.id)

  if(filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `article with the id of ${query.id} is not found` })
  }
}
