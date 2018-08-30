'use strict'

const Car = use('App/Models/Car')

/**
 * Resourceful controller for interacting with cars
 */
class CarController {
  /**
   * Show a list of all cars.
   * GET cars
   */
  async index ({ request, response, view }) {

    const cars = Car.all()

    return cars

  }

  /**
   * Create/save a new car.
   * POST cars
   */
  async store ({ request, response }) {

    const data = request.only([
      'name',
      'license_plate',
      'model',
      'color'
    ])

    const car = new Car()
    car.name = data.name
    car.license_plate = data.license_plate
    car.model = data.model
    car.color = data.color

    await car.save()

    return response.status(201).json(car)

  }

  /**
   * Display a single car.
   * GET cars/:id
   */
  async show ({ params, request, response, view }) {
    const car = await Car.find(params.id)

    if (!car) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    return response.json(car)
  }

  /**
   * Update car details.
   * PUT or PATCH cars/:id
   */
  async update ({ params, request, response }) {

    const data = request.only([
      'name',
      'license_plate',
      'model',
      'color'
    ])

    const car = await Car.find(params.id)
    if (!car) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    car.name = data.name
    car.license_plate = data.license_plate
    car.model = data.model
    car.color = data.color

    await car.save()

    return response.status(200).json(car)

  }

  /**
   * Delete a car with id.
   * DELETE cars/:id
   */
  async destroy ({ params, response }) {
    const car = await Car.find(params.id)
    if (!car) {
      return response.status(404).json({ data: 'Resource not found' })
    }
    await car.delete()

    return response.status(204).json(null)
  }
}

module.exports = CarController
