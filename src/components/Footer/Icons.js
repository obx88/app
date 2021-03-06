import React from 'react';
import Icon from './Icon';
import styles from './Icons.module.scss';

const Icons = () => {
  return (
    <div className={styles.icons}>
      <Icon
        link="https://www.facebook.com/inGoodAtmosphere-100599628162747"
        socialMedia="Facebook"
      />
      <Icon
        link="https://www.instagram.com/in.good.atmosphere/"
        socialMedia="Instagram"
      />
    </div>
  );
};

export default Icons;
