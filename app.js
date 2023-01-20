
const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Merhaba')
  })
app.use(express.static('public'))


const port = 3000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
})