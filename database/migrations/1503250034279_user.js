'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('name', 60).notNullable()
      table.string('lastname', 60).notNullable()
      table.enu('role', ['admin', 'driver','passenger'])
      table.string('department', 60).notNullable()
      table.string('enrollment', 4).notNullable()
      table.string('telephone', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
