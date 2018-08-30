'use strict'

const Schema = use('Schema')

class TripSchema extends Schema {
  up() {
    this.create('trips', (table) => {
      table.increments()

      table
        .integer('scheduling_id')
        .unsigned()
        .references('id')
        .inTable('schedulings')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('car_id')
        .unsigned()
        .references('id')
        .inTable('cars')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('ticket').notNullable().unique()
      table.string('km_initial')
      table.string('km_final')
      table.date('date_departure')
      table.date('date_return')
      table.time('hour_departure')
      table.time('hour_return')
      table.text('note')
      table
        .integer('created_by')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.timestamps()
    })
  }

  down() {
    this.drop('trips')
  }
}

module.exports = TripSchema
