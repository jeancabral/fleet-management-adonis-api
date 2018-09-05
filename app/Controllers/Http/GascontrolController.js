'use strict'

const Gascontrol = use('App/Models/Gascontrol')
const Database = use('Database')
/**
 * Resourceful controller for interacting with gascontrols
 */
class GascontrolController {
  /**
   * Show a list of all gascontrols.
   * GET gascontrols
   */
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new gascontrol.
   * POST gascontrols
   */
  async store ({ request, response }) {

    // const data = request.only(["VECULO", "NRFTOTA", "MODELO", "COR", "TIPODEFROTA", "KMOUHORMETROINICIAL", "RESPONSVEL", "DATAHORA", "TRANSAO", "LIBERAORESTRIO", "CARTO", "ESTABELECIMENTO", "CIDADE", "MOTORISTA", "MATRCULA", "QUILOMETRAGEMOUHORAS", "LIMITEABASTECIMENTOSERVIOS", "LIMITEOFICINA", "SALDOABASTECIMENTOSERVIOS", "SALDOOFICINA", "SERVIO", "SALDOANTERIOR", "VALOR", "KMRODADOSOUHORASTRABALHADAS", "LITROS", "MDIAPADRO", "KMLITROOULITROSHORA", "VALORLITRO", "CONTROLEDEDESEMPENHO", "OBS"])

    const data = request.raw()
    // const gascontrol = new Gascontrol()
    // gascontrol.VECULO = data.VECULO
    // gascontrol.NRFTOTA = data.NRFTOTA
    // gascontrol.MODELO = data.MODELO
    // gascontrol.COR = data.COR
    // gascontrol.TIPODEFROTA = data.TIPODEFROTA
    // gascontrol.KMOUHORMETROINICIAL = data.KMOUHORMETROINICIAL
    // gascontrol.RESPONSVEL = data.RESPONSVEL
    // gascontrol.DATAHORA = data.DATAHORA
    // gascontrol.TRANSAO = data.TRANSAO
    // gascontrol.LIBERAORESTRIO = data.LIBERAORESTRIO
    // gascontrol.ESTABELECIMENTO = data.ESTABELECIMENTO
    // gascontrol.CIDADE = data.CIDADE
    // gascontrol.MOTORISTA = data.MOTORISTA
    // gascontrol.MATRCULA = data.MATRCULA
    // gascontrol.QUILOMETRAGEMOUHORAS = data.QUILOMETRAGEMOUHORAS
    // gascontrol.LIMITEABASTECIMENTOSERVIOS = data.LIMITEABASTECIMENTOSERVIOS
    // gascontrol.LIMITEOFICINA = data.LIMITEOFICINA
    // gascontrol.SALDOABASTECIMENTOSERVIOS = data.SALDOABASTECIMENTOSERVIOS
    // gascontrol.SALDOOFICINA = data.SALDOOFICINA
    // gascontrol.SERVIO = data.SERVIO
    // gascontrol.SALDOANTERIOR = data.SALDOANTERIOR
    // gascontrol.VALOR = data.VALOR
    // gascontrol.KMRODADOSOUHORASTRABALHADAS = data.KMRODADOSOUHORASTRABALHADAS
    // gascontrol.MDIAPADRO = data.MDIAPADRO
    // gascontrol.KMLITROOULITROSHORA = data.KMLITROOULITROSHORA
    // gascontrol.VALORLITRO = data.VALORLITRO
    // gascontrol.CONTROLEDEDESEMPENHO = data.CONTROLEDEDESEMPENHO
    // gascontrol.OBS = data.OBS

    // await gascontrol.save()

    // return response.status(201).json(gascontrol)

    //return response.send(JSON.parse(data))
   const userId = await Database
  .insert(JSON.parse(data))
  .into('gascontrols')

  }

  /**
   * Display a single gascontrol.
   * GET gascontrols/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update gascontrol details.
   * PUT or PATCH gascontrols/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a gascontrol with id.
   * DELETE gascontrols/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = GascontrolController
