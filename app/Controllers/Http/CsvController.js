'use strict'

const Helpers = use('Helpers')

const Csv = use('App/Models/Csv')

/**
 * Resourceful controller for interacting with csvs
 */
class CsvController {
  async show({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`))
  }

  /**
   * Create/save a new csv.
   * POST csvs
   */
  async store({ params, request }) {

    const profilePic = request.file('profile_pic', {
      types: ['text'],
      size: '2mb'
    })

    await profilePic.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `${Date.now()}-${file.clientName}`
      
      
    }))

    if (!profilePic.movedAll()) {
      return profilePic.errors()
    }

    await Promise.all(
      profilePic
        .movedList()
        .map(function (images) {

          const csv = new Csv()

          csv.path = images.fileName

          csv.save()

        }))

    return 'File moved'
  }

}

module.exports = CsvController
