
exports.up = function(knex) {
  return knex.schema.createTable('accounts', (t) => {
    t.string('name').unsigned().primary()
    t.string('email')
    t.string('first_name')
    t.string('last_name')
    t.text('pass_hash')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts')
};
