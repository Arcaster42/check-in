
exports.up = function(knex) {
  const createAccounts = () => {
    return knex.schema.createTable('accounts', (t) => {
      t.string('username').unsigned().primary()
      t.string('email')
      t.string('first_name')
      t.string('last_name')
      t.string('phone')
      t.text('pass_hash')
      t.boolean('alarm_active')
      t.bigInteger('alarm_creation')
      t.bigInteger('alarm_deadline')
      t.integer('alarm_interval')
      t.text('alarm_message')
    })
  }

  return createAccounts()
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts')
};
