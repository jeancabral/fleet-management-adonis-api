'use strict'

const User = use("App/Models/User")

const Database = use('Database')

class UserController {


  /**
 * Show a list of all users.
 * GET users
 */
  async index({ request, response, view }) {

    //const schedulings = Scheduling.with('users').all()

    return await Database.table('users').select("id", "username", "email", "name", "lastname", "role", "department", "enrollment", "telephone")

  }


  /**
 * Display a single user.
 * GET users/:id
 */
  async show({ params, request, response, view }) {
    const user = await User.find(params.id)

    if (!user) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    return await Database.table('users').where({
      id: params.id
    }).select("id", "username", "email", "name", "lastname", "role", "department", "enrollment", "telephone")

  }

  async create({ request }) {
    const data = request.only(["username", "email", "password", "name", "lastname", "role", "department", "enrollment", "telephone"])

    const user = await User.create(data)

    return user
  }


    /**
   * Update trip details.
   * PUT or PATCH trips/:id
   */
  async update({ params, request, response }) {
    const data = request.only(["username", "email", "password", "name", "lastname", "role", "department", "enrollment", "telephone"])


    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    user.username = data.username
    user.email = data.email
    user.name = data.name
    user.lastname = data.lastname
    user.role = data.role
    user.department = data.department
    user.enrollment = data.enrollment
    user.telephone = data.telephone

    await user.save()

    return response.status(200).json(user)
  }

  /**
   * Delete a trip with id.
   * DELETE trips/:id
   */
  async destroy({ params, response }) {
    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({ data: 'Resource not found' })
    }
    await user.delete()

    return response.status(204).json(null)
  }
}

module.exports = UserController
