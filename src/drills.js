require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

const string = 'seitan';
pageNumber = 1;

function searchTerm(search) {
  return knexInstance('shopping_list')
    .select('*')
    .where('name', 'ilike', `%${search}%`)
    .then(results => {
        console.log(results)})
}

//searchTerm(string);

function pagination(pageNumber) {
    let offset = (pageNumber - 1) * 6;

    return knexInstance('shopping_list')
    .limit(6)
    .offset(offset)
    .then(result => console.log(result))
}

//pagination(pageNumber);