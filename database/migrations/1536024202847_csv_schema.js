'use strict'

const Schema = use('Schema')

class CsvSchema extends Schema {
  up () {
    this.create('csvs', (table) => {
      table.increments()
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('csvs')
  }
}

module.exports = CsvSchema
