'use strict'

const Scheduling = use('App/Models/Scheduling')
const Database = use("Database");

/**
 * Resourceful controller for interacting with schedulings
 */
class SchedulingController {
  /**
   * Show a list of all schedulings.
   * GET schedulings
   */
  async index({ request, response, view }) {

    //const schedulings = Scheduling.with('users').all()

    const schedulings = await Scheduling
      .query()
      .select('schedulings.id', 'schedulings.user_id', 'schedulings.destiny', 'schedulings.object', 'schedulings.note', 'schedulings.qty_passengers', 'schedulings.freight_carried',
        'schedulings.date_departure', 'schedulings.date_return', 'schedulings.hour_departure', 'schedulings.hour_return', 'schedulings.created_by',
        'schedulings.created_at', 'schedulings.updated_at', 'trips.ticket')
      .from('schedulings')
      .fullOuterJoin('trips', 'schedulings.id', 'trips.scheduling_id')
      .with('user')
      .fetch()

    return schedulings.toJSON()

  }

  async fullcalendar({ request, response, view }) {

    //const schedulings = Scheduling.with('users').all()

  const fullcontrol =  await Database
  .raw('select * from public.scheduling_view')

  return response.status(200).json(fullcontrol['rows']);

  }

  /**
   * Create/save a new scheduling.
   * POST schedulings
   */
  async store({ auth, request, response }) {

    const data = request.only([
      'user_id',
      'destiny',
      'object',
      'note',
      'qty_passengers',
      'freight_carried',
      'date_departure',
      'date_return',
      'hour_departure',
      'hour_return'
    ])

    const scheduling = new Scheduling()
    scheduling.user_id = data.user_id
    scheduling.destiny = data.destiny
    scheduling.object = data.object
    scheduling.note = data.note
    scheduling.qty_passengers = data.qty_passengers
    scheduling.freight_carried = data.freight_carried
    scheduling.date_departure = data.date_departure
    scheduling.date_return = data.date_return
    scheduling.hour_departure = data.hour_departure
    scheduling.hour_return = data.hour_return
    scheduling.created_by = auth.user.id

    await scheduling.save()

    return response.status(201).json(scheduling)

  }

  /**
   * Display a single scheduling.
   * GET schedulings/:id
   */
  async show({ params, request, response, view }) {
    const scheduling = await Scheduling.find(params.id)

    if (!scheduling) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    return response.json(scheduling)
  }

  /**
   * Update scheduling details.
   * PUT or PATCH schedulings/:id
   */
  async update({ auth, params, request, response }) {
    const data = request.only([
      'user_id',
      'destiny',
      'object',
      'note',
      'qty_assengers',
      'freight_carried',
      'date_departure',
      'date_return',
      'hour_departure',
      'hour_return'
    ])

    const scheduling = await Scheduling.find(params.id)
    if (!scheduling) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    scheduling.user_id = data.user_id
    scheduling.destiny = data.destiny
    scheduling.object = data.object
    scheduling.note = data.note
    scheduling.qty_passengers = data.qty_passengers
    scheduling.freight_carried = data.freight_carried
    scheduling.date_departure = data.date_departure
    scheduling.date_return = data.date_return
    scheduling.hour_departure = data.hour_departure
    scheduling.hour_return = data.hour_return
    scheduling.created_by = auth.user.id

    await scheduling.save()

    return response.status(200).json(scheduling)

  }

  /**
   * Delete a scheduling with id.
   * DELETE schedulings/:id
   */
  async destroy({ params, response }) {
    const scheduling = await Scheduling.find(params.id)
    if (!scheduling) {
      return response.status(404).json({ data: 'Resource not found' })
    }
    await scheduling.delete()

    return response.status(204).json(null)
  }
}

module.exports = SchedulingController
