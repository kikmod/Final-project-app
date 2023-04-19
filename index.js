require('dotenv').config()

const helmet = require("helmet");

const path = require('path');
const multer = require('multer');

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


mongoose.connect('mongodb+srv://mahmoudali:kikmod@cluster0.olpza7c.mongodb.net/flutter?retryWrites=true&w=majority').then((result) => {
    app.listen(process.env.PORT || 3020, () =>
        console.log('connected:)'));
}).catch((e) => { console.log(e); });
app.use(express.json())
app.use(express.static(path.join(__dirname, 'patientimage')))
app.use(bodyParser.json())

app.get('api/user/website', (req, res) => {
    res.render("website.ejs")
})


const subscribersRouter = require('./routes/subscribers')
app.use('/api/user', subscribersRouter)

const eyessRouter = require('./routes/eyess')
app.use('/api/user', eyessRouter)

const earssRouter = require('./routes/earss')
app.use('/api/user', earssRouter)

const headachesRouter = require('./routes/headaches')
app.use('/api/user', headachesRouter)

const babysRouter = require('./routes/babys')
app.use('/api/user', babysRouter)

const kidneysRouter = require('./routes/kidneys')
app.use('/api/user', kidneysRouter)

const hairsRouter = require('./routes/hairs')
app.use('/api/user', hairsRouter)

const lungssRouter = require('./routes/lungss')
app.use('/api/user', lungssRouter)

const skinsRouter = require('./routes/skins')
app.use('/api/user', skinsRouter)


app.listen(3000, () => console.log('Server Started'))