'use strict'

const Scheduling = use('App/Models/Scheduling')

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
  .with('user')
  .fetch()

    return schedulings

  }

  /**
   * Create/save a new scheduling.
   * POST schedulings
   */
  async store({ request, response }) {

    const data = request.only([
      'user_id',
      'destiny',
      'object',
      'note',
      'qtyPassengers',
      'freightCarried',
      'dateDeparture',
      'dateReturn',
      'hourDeparture',
      'hourReturn'
    ])

    const scheduling = new Scheduling()
    scheduling.user_id = data.user_id
    scheduling.destiny = data.destiny
    scheduling.object = data.object
    scheduling.note = data.note
    scheduling.qtyPassengers = data.qtyPassengers
    scheduling.freightCarried = data.freightCarried
    scheduling.dateDeparture = data.dateDeparture
    scheduling.dateReturn = data.dateReturn
    scheduling.hourDeparture = data.hourDeparture
    scheduling.hourReturn = data.hourReturn

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
  async update({ params, request, response }) {
    const data = request.only([
      'user_id',
      'destiny',
      'object',
      'note',
      'qtyPassengers',
      'freightCarried',
      'dateDeparture',
      'dateReturn',
      'hourDeparture',
      'hourReturn'
    ])

    const scheduling = await Scheduling.find(params.id)
    if (!scheduling) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    scheduling.user_id = data.user_id
    scheduling.destiny = data.destiny
    scheduling.object = data.object
    scheduling.note = data.note
    scheduling.qtyPassengers = data.qtyPassengers
    scheduling.freightCarried = data.freightCarried
    scheduling.dateDeparture = data.dateDeparture
    scheduling.dateReturn = data.dateReturn
    scheduling.hourDeparture = data.hourDeparture
    scheduling.hourReturn = data.hourReturn

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
