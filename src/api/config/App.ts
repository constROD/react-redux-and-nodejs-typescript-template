import * as dotenv from 'dotenv'
dotenv.config()

export default {
  /* APP */
  APP_NAME: process.env.APP_NAME || 'Rod Development App',
  APP_ZONE: process.env.APP_ZONE || 'development',
  APP_PORT: process.env.APP_PORT || 3000,

  /* API */
  API_PORT: process.env.API_PORT || 3001
}
