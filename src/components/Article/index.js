import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import Head from './Head';
import Header from './Header';
import withContext from '../../utils/withContext';
import styles from './index.module.scss';

const Article = ({ setArticleHeight }) => {
  const container = useRef(null);
  const router = useRouter();
  const [article, setArticle] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const { header } = router.query;

      const res = await fetch(`/api/articles/${header}`);
      const data = await res.json();
      setArticle(data[0]);
    };
    fetchData();
    setArticleHeight(container.current.offsetHeight);
  }, []);

  return (
    <>
      {article && <Head article={article} />}
      <main className={styles.content} id="content" ref={container}>
        <article className={styles.article}>
          <Header article={article} />
          {article && parse(article.contents)}
          <p className={styles.author}>{article.author}</p>
        </article>
      </main>
    </>
  );
};

Article.propTypes = {
  setArticleHeight: PropTypes.func.isRequired,
};

export default withContext(Article);
