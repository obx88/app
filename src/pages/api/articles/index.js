// header, description, images, tags
const dbQuery = require('../../../../api_modules/selectQuery');

export default async (req, res) => {
  const query =
    'SELECT id, header, description, link, images, tags from articles order by id desc';
  const result = await dbQuery(query);
  res.send(result);
};