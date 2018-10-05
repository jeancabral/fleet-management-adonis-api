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
      table.string('km_initial').nullable()
      table.string('km_final').nullable()
      table.date('date_departure')
      table.date('date_return').nullable()
      table.time('hour_departure')
      table.time('hour_return').nullable()
      table.text('note').nullable()
      table.text('flag_finish_trip').nullable()
      table.text('flag_status_trip').nullable()
      table.text('flag_gas').nullable()
      table.text('rating_vehicle').nullable()
      table.text('signature_passenger').nullable()
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
