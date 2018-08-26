'use strict'

const Schema = use('Schema')

class SchedulingSchema extends Schema {
  up () {
    this.create('schedulings', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('schedulings')
  }
}

module.exports = SchedulingSchema
