'use strict'

const Trip = use('App/Models/Trip')

/**
 * Resourceful controller for interacting with trips
 */
class TripController {
  /**
   * Show a list of all trips.
   * GET trips
   */
  async index({ request, response, view }) {

    const trips = Trip.all()

    return trips

  }

  /**
   * Create/save a new trip.
   * POST trips
   */
  async store({ request, response }) {

    const data = request.only([
      'voucher',
      'ticket',
      'driver',
      'transport',
      'kmInitial',
      'kmFinal',
      'dateDeparture',
      'dateReturn',
      'hourDeparture',
      'hourReturn',
      'note'
    ])

    const trip = new Trip()
    trip.voucher = data.voucher
    trip.ticket = data.ticket
    trip.driver = data.driver
    trip.transport = data.transport
    trip.kmInitial = data.kmInitial
    trip.kmFinal = data.kmFinal
    trip.dateDeparture = data.dateDeparture
    trip.dateReturn = data.dateReturn
    trip.hourDeparture = data.hourDeparture
    trip.hourReturn = data.hourReturn
    trip.note = data.note

    await trip.save()

    return response.status(201).json(trip)

  }

  /**
   * Display a single trip.
   * GET trips/:id
   */
  async show({ params, request, response, view }) {
    const trip = await Trip.find(params.id)

    if (!trip) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    return response.json(trip)
  }

  /**
   * Update trip details.
   * PUT or PATCH trips/:id
   */
  async update({ params, request, response }) {
    const data = request.only([
      'voucher',
      'ticket',
      'driver',
      'transport',
      'kmInitial',
      'kmFinal',
      'dateDeparture',
      'dateReturn',
      'hourDeparture',
      'hourReturn',
      'note'
    ])

    const trip = await Trip.find(params.id)
    if (!trip) {
      return response.status(404).json({ data: 'Resource not found' })
    }    

    trip.voucher = data.voucher
    trip.ticket = data.ticket
    trip.driver = data.driver
    trip.transport = data.transport
    trip.kmInitial = data.kmInitial
    trip.kmFinal = data.kmFinal
    trip.dateDeparture = data.dateDeparture
    trip.dateReturn = data.dateReturn
    trip.hourDeparture = data.hourDeparture
    trip.hourReturn = data.hourReturn
    trip.note = data.note

    await trip.save()

    return response.status(200).json(trip)
  }

  /**
   * Delete a trip with id.
   * DELETE trips/:id
   */
  async destroy({ params, response }) {
    const trip = await Trip.find(params.id)
    if (!trip) {
      return response.status(404).json({ data: 'Resource not found' })
    }
    await trip.delete()

    return response.status(204).json(null)
  }
}

module.exports = TripController
