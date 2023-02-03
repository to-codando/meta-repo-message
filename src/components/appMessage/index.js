import { createComponent } from 'terezzu'

import model from './model'
import view from './view'
import controller from './controller'

const name = 'appMessage'
const app = { name, model, view, controller }
const appMessage = createComponent(app)

export { appMessage }
