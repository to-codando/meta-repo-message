import { render, createApp } from 'terezzu'

import { appMain } from '@/components/appMain'
import { appMessage } from '@/components/appMessage'

const appRoot = createApp({
  appName: 'appRoot',
  mount: context => {
    // prettier-ignore
    render(appMain, context, appMainElement => {
      render(appMessage, appMainElement)
    }, document.body)
  }
})
// prettier-ignore
export { appRoot }
