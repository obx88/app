import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ArticleContent from '../../components/Article';
import Loading from '../../components/Loading';
import Popup from '../../components/Popup';

const Article = () => {
  const router = useRouter();
  const [articleHeight, setArticleHeight] = useState(0);
  if (router.isFallback) return <Loading />;
  return (
    <>
      <Popup articleHeight={articleHeight} />
      <ArticleContent setArticleHeight={setArticleHeight} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  return { props: { header: params.header } };
}

export default Article;
