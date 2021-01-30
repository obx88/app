import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Tags from './Tags';
import styles from './index.module.scss';

const ArticleThumbnail = ({
  images,
  header,
  subHeader,
  description,
  tags,
  link,
}) => {
  return (
    <div className={styles.wrapper}>
      <Thumbnail images={images} link={link} />
      <h2 className={styles.header}>
        {header} {subHeader && <span>{subHeader}</span>}
      </h2>
      <Tags tags={tags} />
      <p className={styles.description}>{description}</p>
      <a href={`/kampania/${link}`} className={styles.link}>
        Czytaj więcej
      </a>
    </div>
  );
};

ArticleThumbnail.defaultProps = {
  subHeader: '',
};

ArticleThumbnail.propTypes = {
  images: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticleThumbnail;
