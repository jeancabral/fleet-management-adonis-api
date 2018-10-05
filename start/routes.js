"use strict";

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

const Route = use("Route");

Route.group(() => {
  Route.get("/users", "UserController.index").middleware("auth");

  Route.get("/users/drivers", "UserController.driver").middleware("auth");

  Route.get("users/:id", "UserController.show").middleware("auth");

  Route.put("users/:id", "UserController.update").middleware("auth");

  Route.get("/profile", "UserController.profile").middleware("auth");

  Route.post("/users", "UserController.create");

  Route.get("images/:path", "CsvController.show").middleware("auth");

  Route.post("/images", "CsvController.store").middleware("auth");

  Route.get("/gascontrol", "GascontrolController.index").middleware("auth");

  Route.post("/gascontrol", "GascontrolController.store").middleware("auth");

  Route.delete("/gascontrol", "GascontrolController.destroy").middleware(
    "auth"
  );

  Route.put("/gascontrol/:id", "GascontrolController.update").middleware(
    "auth"
  );

  Route.post("/sessions", "SessionController.create");

  Route.get(
    "/calendar",
    "SchedulingController.schedulings_fullcalendar"
  ).middleware("auth");

  Route.get("/calendar/trip", "TripController.trips_fullcalendar").middleware(
    "auth"
  );

  Route.get("/calendar/trip/departure", "TripController.trips_departure");

  Route.get("/calendar/trip/return", "TripController.trips_return");

  Route.get(
    "/calendar/trip/daily/itinerary/driver/:id",
    "TripController.trips_daily_itinerary_driver"
  ).middleware("auth");

  Route.get(
    "/calendar/trip/scheduling/itinerary/driver/:id",
    "TripController.trips_scheduling_itinerary_driver"
  ).middleware("auth");

  Route.put("/trip/start/:id", "TripController.update_start").middleware(
    "auth"
  );

  Route.put("/trip/end/:id", "TripController.update_end").middleware("auth");

  Route.put(
    "/trip/kminitial/:id",
    "TripController.update_kminitial"
  ).middleware("auth");

  Route.put("/trip/kmfinal/:id", "TripController.update_kmfinal").middleware(
    "auth"
  );

  Route.get(
    "/calendar/open",
    "SchedulingController.countOpenSchedulings"
  ).middleware("auth");

  Route.get("/drivers/count", "UserController.count").middleware("auth");

  Route.get("/cars/count", "CarController.count").middleware("auth");

  Route.resource("schedulings", "SchedulingController")
    .apiOnly()
    .middleware("auth");

  Route.resource("cars", "CarController")
    .apiOnly()
    .middleware("auth");

  Route.resource("trips", "TripController")
    .apiOnly()
    .middleware("auth");
}).prefix("api");
