import React, { useContext } from 'react';
import Context from '../../utils/Context';
import styles from './Header.module.scss';

const ArticleTitle = ({ article }) => {
  const imagesPath = `/data/articles/${article.images}/`;
  return (
    <div className={styles.header}>
      <h1 className={styles.text}>{article.header}</h1>
      {article.subHeaders && (
        <h2 className={styles.subheader}>{article.subHeaders}</h2>
      )}
      <img
        className={styles.image}
        src={`${imagesPath}1280.jpg`}
        alt="Miniaturka artykułu"
        srcSet={`${imagesPath}768.jpg 768w, ${imagesPath}1280.jpg 1280w, ${imagesPath}1920.jpg 1920w`}
        sizes="(max-width: 768px) 768px,(max-width: 1920px) 1280px,
            1920px"
      />
    </div>
  );
};

export default ArticleTitle;
