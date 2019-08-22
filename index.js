const express = require('express')
const app = express()
const os = require('os')

app.listen(5000)

app.get('/', (req, res) => res.json({
  hostname: os.hostname(),
  userInfo: os.userInfo(),
  arch: os.arch(),
  release: os.release()
}))