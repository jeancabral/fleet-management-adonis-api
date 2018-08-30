'use strict'

const Model = use('Model')

class Trip extends Model {

    scheduling() {
        return this.belongsTo('App/Models/Scheduling')
    }

    user() {
        return this
            .belongsTo('App/Models/User')
    }

    car() {
        return this
            .belongsTo('App/Models/Car')
    }
}

module.exports = Trip
