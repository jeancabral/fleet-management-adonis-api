'use strict'

const Model = use('Model')

class Scheduling extends Model {


   
        user () {
            return this
              .belongsTo('App/Models/User')
          }


}

module.exports = Scheduling
