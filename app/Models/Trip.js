'use strict'

const Model = use('Model')

class Trip extends Model {

    schedulings () {
        return this.belongsTo('App/Models/Scheduling')
      }
}

module.exports = Trip
