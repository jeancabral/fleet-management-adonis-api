'use strict'

const Helpers = use('Helpers')

const Csv = use('App/Models/Csv')

var fs = require('fs')


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


    // await profilePic.move(Helpers.tmpPath('uploads'), {
    //   name: `${Date.now()}-${this._clientName}`
    // })

    // if (!profilePic.moved()) {
    //   return profilePic.error()
    // }

    await profilePic.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `${Date.now()}-${file.clientName}`
      
    }))

    fs.readFile(Helpers.tmpPath('uploads').concat('/1536029295067-domingos%2023082019.txt'), 'utf8', function(err, data)
    {
        if (err)
        {
            // check and handle err
        }
        var linesExceptFirst = data.split('\n').slice(1).join('\n');
        fs.writeFile(profilePic, linesExceptFirst);
    });

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
