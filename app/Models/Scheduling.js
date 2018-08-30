'use strict'

const moment = require('moment')

const Model = use('Model')

class Scheduling extends Model {
    user() {
        return this
            .belongsTo('App/Models/User')
    }

    static get computed() {
        return ['start', 'end', 'title', 'departure']
    }

    getTitle({ destiny,object }) {
        return `${destiny} - ${object}`
    }

    getStart({ date_departure }) {
        return date_departure
    }

    getEnd({ date_return }) {
        return date_return
    }

    getDeparture({ date_departure }) {
        return moment(date_departure).format('DD/MM/YYYY')
    }
}

module.exports = Scheduling
