'use strict'

const Schema = use('Schema')

class TripSchema extends Schema {
  up () {
    this.create('trips', (table) => {
      table.increments()

      table
        .integer('voucher')
        .unsigned()
        .references('id')
        .inTable('schedulings')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('driver')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('transport')
        .unsigned()
        .references('id')
        .inTable('cars')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('ticket').notNullable().unique()
      table.string('kmInitial')
      table.string('kmFinal')
      table.date('dateDeparture')
      table.date('dateReturn')
      table.time('hourDeparture')
      table.time('hourReturn')
      table.text('note')

      table.timestamps()
    })
  }

  down () {
    this.drop('trips')
  }
}

module.exports = TripSchema
