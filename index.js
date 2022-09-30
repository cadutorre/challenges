const express = require('express')
const app = express()
const port = 3000

// app.get('/', (_req, res) => {
//     res.send("Hello World!")
// })

app.use('/star-fields',express.static('001-star-fields'))
app.use('/merge-sponge',express.static('002-merge-sponge'))
app.use('/snake-game', express.static('003-snake-game'))
app.use('/purple-rain', express.static('004-purple-rain'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})