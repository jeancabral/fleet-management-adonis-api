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
      table.string('destino').notNullable()
      table.string('finalidade').notNullable()
      table.text('observacao').notNullable()
      table.integer('qtdPassageiros').notNullable()
      table.string('cargaTransportada').notNullable()
      table.date('dataPartida').notNullable()
      table.date('dataRetorno').notNullable()
      table.time('horaPartida').notNullable()
      table.time('horaRetorno').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('schedulings')
  }
}

module.exports = SchedulingSchema
