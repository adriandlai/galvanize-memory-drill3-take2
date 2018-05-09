const gamestabledata = require('../gamestabledata')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "gamestable"; ALTER SEQUENCE gamestable_id_seq  RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('gamestable').insert(gamestabledata)
    });
};

