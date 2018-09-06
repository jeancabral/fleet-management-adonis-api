"use strict";

const Gascontrol = use("App/Models/Gascontrol");
const Database = use("Database");
/**
 * Resourceful controller for interacting with gascontrols
 */
class GascontrolController {
  /**
   * Show a list of all gascontrols.
   * GET gascontrols
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new gascontrol.
   * POST gascontrols
   */
  async store({ request, response }) {
    const data = request.raw();
    const userId = await Database.insert(JSON.parse(data))
      .into("gascontrols")
      .returning("id");

    return userId;
  }

  /**
   * Display a single gascontrol.
   * GET gascontrols/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Update gascontrol details.
   * PUT or PATCH gascontrols/:id
   */
  async update({ params, request, response }) {
    const data = request.only(["id", "MESBASE", "ANOBASE"]);

    const gascontrol = await Gascontrol.find(params.id);

    if (!gascontrol) {
      return response.status(404).json({ data: "Resource not found" });
    }

    gascontrol.id = data.id;
    gascontrol.MESBASE = data.MESBASE;
    gascontrol.ANOBASE = data.ANOBASE;

    await gascontrol.save();

    return response.status(200).json(gascontrol);
  }

  /**
   * Delete a gascontrol with id.
   * DELETE gascontrols/:id
   */
  async destroy({ params, request, response }) {
    const data = request.only(["MESBASE", "ANOBASE"]);

    const affectedRows = await Database.table("gascontrols")
      .where({ ANOBASE: data.ANOBASE, MESBASE: data.MESBASE })
      .delete();

    return response.status(204).send(affectedRows);
  }
}

module.exports = GascontrolController;
