'use strict'

const Model = use('Model')

class Car extends Model {
    trips() {
        return this.hasMany('App/Models/Trip')
    }
}

module.exports = Car
