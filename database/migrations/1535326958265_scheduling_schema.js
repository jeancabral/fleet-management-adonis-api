'use strict'

const Schema = use('Schema')

class SchedulingSchema extends Schema {
  up () {
    this.create('schedulings', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('destiny').notNullable()
      table.string('object').notNullable()
      table.text('note').notNullable()
      table.integer('qtyPassengers').notNullable()
      table.string('freightCarried').notNullable()
      table.date('dateDeparture').notNullable()
      table.date('dateReturn').notNullable()
      table.time('hourDeparture').notNullable()
      table.time('hourReturn').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('schedulings')
  }
}

module.exports = SchedulingSchema
