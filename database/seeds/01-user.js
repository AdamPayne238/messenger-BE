
exports.seed = function(knex) {
  return knex('user').insert([
    {username: 'random', password: 'random'},
    {username: 'test', password: 'test'}
  ])
}
