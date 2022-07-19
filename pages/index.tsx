import type { GetStaticProps, NextPage } from 'next'
import { server } from '../config'
import { Article } from '../types';
import ArticleList from '../components/ArticleList';

const Home: NextPage<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles: articles,
    }
  }
}

export default Home
