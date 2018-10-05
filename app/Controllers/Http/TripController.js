'use strict'

var voucher_codes = require('voucher-code-generator');
var mm = require('moment');

const Trip = use('App/Models/Trip')
const Database = use('Database')

/**
 * Resourceful controller for interacting with trips
 */
class TripController {
  /**
   * Show a list of all trips.
   * GET trips
   */
  async index({ request, response, view }) {

    const trips = await Trip
      .query()
      .with('user')
      .with('scheduling')
      .with('car')
      .fetch()

    return trips

  }

  async trips_fullcalendar({ request, response, view }) {

    const fullcontrol = await Database
      .raw('select * from public.trip_view')

    return response.status(200).json(fullcontrol['rows']);

  }

  async trips_departure({ request, response, view }) {

    const fullcontrol = await Database
      .raw("SELECT * FROM public.trip_view WHERE flag_status_trip is NULL AND to_date(start,'YYYY-MM-DD') = to_date(TO_CHAR(NOW() :: DATE, 'YYYY-MM-DD'),'YYYY-MM-DD')")

    return response.status(200).json(fullcontrol['rows']);

  }


  async trips_return({ request, response, view }) {

    const fullcontrol = await Database
      .raw("SELECT * FROM public.trip_view WHERE flag_status_trip = 'S' AND to_date(start,'YYYY-MM-DD') = to_date(TO_CHAR(NOW() :: DATE, 'YYYY-MM-DD'),'YYYY-MM-DD')")

    return response.status(200).json(fullcontrol['rows']);

  }

  async trips_daily_itinerary_driver({ params, response }) {

    const fullcontrol = await Database
      .raw("SELECT * FROM public.trip_view WHERE (flag_finish_trip IS NULL OR flag_finish_trip = 'S') AND to_date(start,'YYYY-MM-DD') = to_date(TO_CHAR(NOW() :: DATE, 'YYYY-MM-DD'),'YYYY-MM-DD') AND user_id = "+ params.id +"")

    return response.status(200).json(fullcontrol['rows']);

  }

  async trips_scheduling_itinerary_driver({ params, response }) {
    const fullcontrol = await Database
      .raw("SELECT * FROM public.trip_view WHERE flag_status_trip is NULL and to_date(start,'YYYY-MM-DD') > to_date(TO_CHAR(NOW() :: DATE, 'YYYY-MM-DD'),'YYYY-MM-DD') AND user_id = "+ params.id +"")

    return response.status(200).json(fullcontrol['rows']);

  }

  /**
   * Create/save a new trip.
   * POST trips
   */
  async store({ auth, request, response }) {

    const data = request.only([
      'scheduling_id',
      'user_id',
      'car_id',
      'km_initial',
      'km_final',
      'date_departure',
      'date_return',
      'hour_departure',
      'hour_return',
      'note'
    ])

    let vouchers = voucher_codes.generate({
      charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      length: 4,
      prefix: mm().format('YYYY').concat('-')
    });

    const trip = new Trip()
    trip.scheduling_id = data.scheduling_id
    trip.ticket = vouchers[0]
    trip.user_id = data.user_id
    trip.car_id = data.car_id
    trip.km_initial = data.km_initial
    trip.km_final = data.km_final
    trip.date_departure = data.date_departure
    trip.date_return = data.date_return
    trip.hour_departure = data.hour_departure
    trip.hour_return = data.hour_return
    trip.note = data.note
    trip.created_by = auth.user.id

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
  async update_kminitial({ params, request, response }) {
    const data = request.only([
      'km_initial'
    ])

    const trip = await Trip.find(params.id)
    if (!trip) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    trip.km_initial = data.km_initial
    trip.flag_finish_trip = 'S'  

    await trip.save()

    return response.status(200).json(trip)
  }

  async update_kmfinal({ auth, params, request, response }) {
    const data = request.only([
      'km_final',
      'gas',
      'rating',
      'signature'
    ])

    const trip = await Trip.find(params.id)
    if (!trip) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    trip.km_final = data.km_final
    trip.flag_gas = data.gas
    trip.rating_vehicle = data.rating
    trip.flag_finish_trip = 'R'
    trip.signature_passenger = data.signature 

    await trip.save()

    return response.status(200).json(trip)
  }

  /**
   * Update trip details.
   * PUT or PATCH trips/:id
   */
  async update_start({ auth, params, request, response }) {
    const data = request.only([
      'date_departure',
      'hour_departure'
    ])

    const trip = await Trip.find(params.id)
    if (!trip) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    trip.date_departure = data.date_departure
    trip.hour_departure = data.hour_departure
    trip.flag_status_trip = 'S'  

    await trip.save()

    return response.status(200).json(trip)
  }

  async update_end({ auth, params, request, response }) {
    const data = request.only([
      'date_return',
      'hour_return'
    ])

    const trip = await Trip.find(params.id)
    if (!trip) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    trip.date_return = data.date_return
    trip.hour_return = data.hour_return
    trip.flag_status_trip = 'R'     

    await trip.save()

    return response.status(200).json(trip)
  }

  /**
   * Update trip details.
   * PUT or PATCH trips/:id
   */
  async update({ auth, params, request, response }) {
    const data = request.only([
      'scheduling_id',
      'ticket',
      'user_id',
      'car_id',
      'km_initial',
      'km_final',
      'date_departure',
      'date_return',
      'hour_departure',
      'hour_return',
      'flag_gas',
      'flag_finish_trip'
    ])

    const trip = await Trip.find(params.id)
    if (!trip) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    trip.scheduling_id = data.scheduling_id
    trip.ticket = data.ticket
    trip.user_id = data.user_id
    trip.car_id = data.car_id
    trip.km_initial = data.km_initial
    trip.km_final = data.km_final
    trip.date_departure = data.date_departure
    trip.date_return = data.date_return
    trip.hour_departure = data.hour_departure
    trip.hour_return = data.hour_return
    trip.flag_gas = data.flag_gas
    trip.created_by = auth.user.id
    trip.flag_finish_trip = data.flag_finish_trip
    

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
