import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import CloseButton from './CloseButton';
import Context from '../../utils/Context';

const InfoPopup = ({ switchWindow }) => {
  const { data } = useContext(Context);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        switchWindow();
      }}
    >
      <div className="marker__info-window">
        <CloseButton switchWindow={switchWindow} />
        <h2>{data.title}</h2>
        <p>{data.pm10}</p>
        <p>{data['pm2.5']}</p>
      </div>
    </OutsideClickHandler>
  );
};

InfoPopup.propTypes = {
  switchWindow: PropTypes.func.isRequired,
};

export default InfoPopup;