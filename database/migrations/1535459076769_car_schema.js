'use strict'

const Schema = use('Schema')

class CarSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('license_plate', 7).notNullable().unique()
      table.string('model').notNullable()
      table.string('fleet').notNullable()
      table.string('automaker').notNullable()
      table.string('motor').notNullable()
      table.string('type_fuel').notNullable()
      table.string('color').notNullable()
      table.string('fabrication_date', 4).notNullable()
      table.string('model_date', 4).notNullable()
      table.string('tank_capacity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarSchema
