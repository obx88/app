import React, { useContext } from 'react';
import Caqi from './Caqi';
import MapContext from '../../utils/map-context';
import Measurements from './Measurements';
import { getMainData, getSecondaryData } from '../../utils/groupMapData';
import styles from './MeasurementsContainer.module.scss';
import BackToLocationBtn from './BackToLocationBtn';

const MeasurementsContainer = () => {
  const {
    activeSensor: {
      data: { city, iaqi },
    },
  } = useContext(MapContext);
  const convertTitle = (name) => {
    const index = name.lastIndexOf(',');
    const title = name.slice(0, index);
    if (title === 'K-Koźle') return 'Kędzierzyn Koźle';
    return title;
  };
  const convertedTitle = convertTitle(city.name);
  const mainData = getMainData(iaqi);
  const secondaryData = getSecondaryData(iaqi);
  return (
    <>
      <h1 className={styles.city}>
        <BackToLocationBtn />
        {convertedTitle}
      </h1>
      <Caqi />
      <Measurements priority="main" data={mainData} />
      <Measurements priority="secondary" data={secondaryData} />
    </>
  );
};

export default MeasurementsContainer;
