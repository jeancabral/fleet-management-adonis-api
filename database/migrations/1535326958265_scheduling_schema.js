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
      table.integer('qty_passengers').notNullable()
      table.string('freight_carried').notNullable()
      table.date('date_departure').notNullable()
      table.date('date_return').notNullable()
      table.time('hour_departure').notNullable()
      table.time('hour_return').notNullable()
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

  down () {
    this.drop('schedulings')
  }
}

module.exports = SchedulingSchema
