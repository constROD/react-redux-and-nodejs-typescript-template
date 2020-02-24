const dotenv = require('dotenv')
dotenv.config()

const APP_ZONE = process.env.APP_ZONE || 'development'
const APP_PORT = process.env.APP_PORT || 3000

const API_PROTOCOL = process.env.API_PROTOCOL || 'http'
const API_HOSTNAME = process.env.API_HOSTNAME || 'localhost'
const API_PORT = APP_ZONE == 'development' ? (process.env.API_PORT || 3001) : APP_PORT

module.exports = {
  /* APP */
  APP_NAME: process.env.APP_NAME || 'Rod Development App',
  APP_ZONE,
  APP_PORT,

  /* API */
  API_PROTOCOL,
  API_HOSTNAME,
  API_PORT,
  API_URL: APP_ZONE == 'production' ? '' : `${API_PROTOCOL}://${API_HOSTNAME}:${API_PORT}`
}
