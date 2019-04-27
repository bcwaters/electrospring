import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import App from '../src/App/App.js'
//TODO add socket URL prop to App 
const serverRenderer = (req, res, next) => {
  const context = {}
  fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
				<App />
				)}</div>`
      )
    )
  })
}

export default serverRenderer