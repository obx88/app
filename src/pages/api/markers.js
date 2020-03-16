import { sensors } from '../../../public/data/markers.json';

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(sensors));
};
