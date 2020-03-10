import React from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';
import Item from './Item';

const Menu = ({ isActive }) => {
  const anchors = [
    'Mapa',
    'Kampania',
    'O nas',
    'Encyklopedia',
    'Mierniki',
    'Kontakt',
  ];
  return (
    <nav className={`menu ${isActive ? 'menu--isActive' : ''}`}>
      {anchors.map((anchor) => (
        <Item key={anchor} anchor={anchor} isActive={isActive} />
      ))}
    </nav>
  );
};
Menu.defaultProps = {
  isActive: false,
};
Menu.propTypes = {
  isActive: PropTypes.bool,
};
export default Menu;
