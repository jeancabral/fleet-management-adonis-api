'use strict'

const Schema = use('Schema')

class GascontrolSchema extends Schema {
  up () {
    this.create('gascontrols', (table) => {
      table.increments()
      table.string('VECULO')
      table.string('NRFTOTA')
      table.string('MODELO')
      table.string('COR')
      table.string('TIPODEFROTA')
      table.string('KMOUHORMETROINICIAL')
      table.string('RESPONSVEL')
      table.string('DATAHORA')
      table.string('TRANSAO')
      table.string('LIBERAORESTRIO')
      table.string('CARTO')
      table.string('ESTABELECIMENTO')
      table.string('CIDADE')
      table.string('MOTORISTA')
      table.string('MATRCULA')
      table.string('QUILOMETRAGEMOUHORAS')
      table.string('LIMITEABASTECIMENTOSERVIOS')
      table.string('LIMITEOFICINA')
      table.string('SALDOABASTECIMENTOSERVIOS')
      table.string('SALDOOFICINA')
      table.string('SERVIO')
      table.string('SALDOANTERIOR')
      table.string('VALOR')
      table.string('KMRODADOSOUHORASTRABALHADAS')
      table.string('LITROS')
      table.string('MDIAPADRO')
      table.string('KMLITROOULITROSHORA')
      table.string('VALORLITRO')
      table.string('CONTROLEDEDESEMPENHO')
      table.string('OBS')
      table.string('MESBASE')
      table.string('ANOBASE')
      table.timestamps()
    })
  }

  down () {
    this.drop('gascontrols')
  }
}

module.exports = GascontrolSchema
