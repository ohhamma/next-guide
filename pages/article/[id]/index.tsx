import { GetStaticPaths, GetStaticProps } from 'next';
import { server } from '../../../config'
import Link from 'next/link'
import Meta from "../../../components/Meta"
import type { Article } from '../../../types';

const Article = ({ article }: { article: Article }) => {
  // const router = useRouter()
  // const {id} = router.query

  return (
  <>
    <Meta title={article.title} keywords='' description={article.excerpt} />
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br />
    <Link href='/'>Go Back</Link>
  </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`)
  const articles = await res.json()
  // const results: GetArticleResults = await res.json()
  
  const ids = articles.map((article: Article) => article.id)
  const paths = ids.map((id: string) => ({
    params: { id: id.toString() }
  }))
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params!.id}`)
  const article = await res.json()

  return {
    props: {
      article,
    }
  }
}

export default Article;