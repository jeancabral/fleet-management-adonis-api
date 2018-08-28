'use strict'

const Schema = use('Schema')

class CarSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('licensePlate', 7).notNullable().unique()
      table.string('model', 80).notNullable()
      table.string('color', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarSchema
