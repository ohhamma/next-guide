import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'
import type { Article } from '../types';
import { FunctionComponent } from 'react';
// import styled from 'styled-components'

type Props = {
  articles: Article[]
}

const ArticleList: FunctionComponent<Props> = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
    {/* <ArticleGrid> */}
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    {/* </ArticleGrid> */}
    </div>
  )
}

// using styled-components
// const ArticleGrid = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
//   max-width: 800px;
//   margin-top: 3rem;
// `;

export default ArticleList