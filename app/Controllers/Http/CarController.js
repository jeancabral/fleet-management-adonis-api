'use strict'

/**
 * Resourceful controller for interacting with cars
 */
class CarController {
  /**
   * Show a list of all cars.
   * GET cars
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new car.
   * GET cars/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new car.
   * POST cars
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single car.
   * GET cars/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing car.
   * GET cars/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update car details.
   * PUT or PATCH cars/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a car with id.
   * DELETE cars/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CarController
