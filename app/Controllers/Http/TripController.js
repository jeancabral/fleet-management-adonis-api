'use strict'

/**
 * Resourceful controller for interacting with trips
 */
class TripController {
  /**
   * Show a list of all trips.
   * GET trips
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new trip.
   * GET trips/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new trip.
   * POST trips
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single trip.
   * GET trips/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing trip.
   * GET trips/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update trip details.
   * PUT or PATCH trips/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a trip with id.
   * DELETE trips/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TripController
