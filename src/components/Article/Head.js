import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ArticleHead = ({ article }) => {
  const router = useRouter();
  return (
    <Head>
      <meta name="robots" content="max-snippet:-1, max-image-preview:large" />
      <meta
        key="og:url"
        property="og:url"
        content={`https://ingoodatmosphere.com${router.asPath}`}
      />
      <meta key="og:type" property="og:type" content="article" />
      <meta
        key="article:published_time"
        property="article:published_time"
        content={article.publishDate}
      />
      <meta
        key="article:author"
        property="article:author"
        content={article.author}
      />
      <meta
        key="article:section"
        property="article:section"
        content={article.section}
      />
      <meta key="og:title" property="og:title" content={article.header} />
      <meta
        key="og:description"
        property="og:description"
        content={article.description}
      />
      <meta
        key="og:image"
        property="og:image"
        content={`https://ingoodatmosphere.com/data/articles/${article.images}/og.jpg`}
      />
      <meta
        key="twitter:description "
        name="twitter:description"
        content={article.description}
      />
      <meta
        key="twitter:title"
        name="twitter:title"
        content="inGoodAtmosphere"
      />
      <meta
        name="twitter:image"
        key="twitter:image"
        content={`https://ingoodatmosphere.com/data/articles/${article.images}/og.jpg`}
      />
      <title key="title">{article.header}</title>
    </Head>
  );
};

ArticleHead.propTypes = {
  article: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
};

export default ArticleHead;
