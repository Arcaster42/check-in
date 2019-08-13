
exports.up = function(knex) {
  const createAccounts = () => {
    knex.schema.createTable('accounts', (t) => {
      t.string('username').unsigned().primary()
      t.string('email')
      t.string('first_name')
      t.string('last_name')
      t.string('phone')
      t.text('pass_hash')
    })
  }
  
  const createChecks = () => {
    knex.schema.createTable('checks', (t) => {
      t.increment().primary()
      t.string('username').references('accounts.username')
      t.timestamp('check_in')
      t.timestamp('check_limit')
      t.boolean('alarm')
    })
  }

  return createAccounts()
    .then(() => createChecks())
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts').dropTable('checks')
};
