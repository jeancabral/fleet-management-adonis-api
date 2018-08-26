'use strict'

/**
 * Resourceful controller for interacting with schedulings
 */
class SchedulingController {
  /**
   * Show a list of all schedulings.
   * GET schedulings
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new scheduling.
   * GET schedulings/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new scheduling.
   * POST schedulings
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single scheduling.
   * GET schedulings/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing scheduling.
   * GET schedulings/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update scheduling details.
   * PUT or PATCH schedulings/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a scheduling with id.
   * DELETE schedulings/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = SchedulingController
