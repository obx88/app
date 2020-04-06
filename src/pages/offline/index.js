import React from 'react';
import PropTypes from 'prop-types';
import Error from '../../components/Error';

const Offline = ({ offline }) => {
  return <Error message={offline} text="Jesteś offline" />;
};

Offline.propTypes = {
  offline: PropTypes.string.isRequired,
};

export async function getStaticProps() {
  return { props: { offline: 'Offline' } };
}

export default Offline;
