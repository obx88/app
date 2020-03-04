import React from 'react';
import ArticleThumbnail from '../../components/ArticleThumbnail';
import { articleThumbnails } from '../../../public/data/article-thumbnails.json';

const Campaign = () => (
  <main className="content campaign__content">
    <h1>Nasze artykuły</h1>
    <h2 className="campaign__h2">Tutaj przeczytasz wszystkie nasze artykuły</h2>
    {articleThumbnails.length &&
      articleThumbnails.map((article) => {
        return (
          <ArticleThumbnail
            key={article.header}
            thumbnail={article.thumbnail}
            header={article.header}
            description={article.description}
            tags={article.tags}
          />
        );
      })}
  </main>
);

export default Campaign;
