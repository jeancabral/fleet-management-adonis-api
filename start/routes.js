'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/users', 'UserController.index').middleware('auth')

Route.get('/users/drivers', 'UserController.driver').middleware('auth')

Route.get('users/:id', 'UserController.show').middleware('auth')

Route.put('users/:id', 'UserController.update').middleware('auth')

Route.post('/users', 'UserController.create')

Route.post('/sessions', 'SessionController.create')

Route.resource('schedulings', 'SchedulingController')
    .apiOnly()
    .middleware('auth')

Route.resource('cars', 'CarController')
    .apiOnly()
    .middleware('auth')

Route.resource('trips', 'TripController')
    .apiOnly()
    .middleware('auth')