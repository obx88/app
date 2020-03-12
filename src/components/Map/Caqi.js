import React, { useContext } from 'react';
import mapContext from '../../utils/map-context';
import {descriptions} from '../../../public/data/caqi-descriptions.json';
import './caqi.module.scss';


const Caqi = () => {
    const { activeSensor:{caqi} } = useContext(mapContext);
    const [bad, medium, good, veryGood] = descriptions;
    const setStatus = (caqiValue) => {
      if (caqiValue < 20) return {backgroundColor: '#44a368', status: veryGood};
      if (caqiValue < 40) return {backgroundColor: '#a9c46e', status: good};
      if (caqiValue < 60) return {backgroundColor: '#c19330', status: medium};
      return {backgroundColor: '#e1625a', status: bad};
    }
    const {status, backgroundColor} = setStatus(caqi);
    return (
      <div className="map__data__caqi" style={{backgroundColor}}>
        <div>
          <h3>CAQI</h3>
          <h2>{caqi}</h2>
        </div>
        <p className="map__data__status">{status}</p>
      </div>
    );
}

export default Caqi;
