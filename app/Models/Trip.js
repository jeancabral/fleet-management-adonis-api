'use strict'

const moment = require('moment')

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

    static get computed() {
        return ['start', 'end', 'title', 'departure']
    }

    getTitle({ ticket }) {
        return `${ticket}`
    }

    getStart({ date_departure, hour_departure }) {
        return moment(date_departure).format('YYYY-MM-DD') + ' ' + hour_departure
    }

    getEnd({ date_return, hour_return }) {
        return moment(date_return).format('YYYY-MM-DD') + ' ' + hour_return
    }

    getDeparture({ date_departure }) {
        return moment(date_departure).format('DD/MM/YYYY')
    }
}

module.exports = Trip
