const express = require('express')
const Subscriber = require('../models/subscriber')
const router = express.Router()
const bcrypt = require('bcryptjs');
const joi = require('@hapi/joi');
const { required } = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();



//const multer = require('multer');

//const upload = multer({
//  dest: 'patientimage/'
//})
// Getting all



router.get('/subscribers', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/subscribers/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber)
});

router.get('/logins', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



//router.post('/', async (req, res) => {
//  try {
//    const { email, password, name, gender, phone, user_id } = req.body;
//  const exisitingUser = await Subscriber.findOne({ email });
//   if (exisitingUser) {
//     return res.status(400).json({ msg: "email is already there " });
// }
// const hpassword = await bcrypt.hash(password, 8);
//let subscriber = new Subscriber({ email, name, gender, phone, user_id, password: hpassword });
//       subscriber = await subscriber.save();
//     res.json(subscriber);
//} catch (e) {
//  res.status(500).json({ error: e.message });
// }

//});

router.post('/subscribers', async (req, res) => {
    // console.log(req.file);
    //res.send(validation);

    const emailExist = await Subscriber.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email is already exist');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);




    const subscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        phone: req.body.phone,
        gender: req.body.gender,
        user_id: req.body.user_id,
        // patientimage: req.res.patient_image

    });
    try {


        const savedSubscriber = await subscriber.save();
        res.send({ subscriber: subscriber._id });


    }

    catch (e) {
        res.status(400).send(e);
    }

});




router.post('/logins', async (req, res) => {
    const subscriber = await Subscriber.findOne({ email: req.body.email });
    if (!subscriber) return res.status(400).send('Email is not found  ');

    const validPass = await bcrypt.compare(req.body.password, subscriber.password);
    if (!validPass) return res.status(400).send('Invalid password');

    const token = jwt.sign({ _id: subscriber._id }, process.env.TOKEN_SECRET);
    res.header('token', token).send(token);

    //res.send('logged in!');

});




// Creating one




//router.post('/', async (req, res) => {


// try {

//   const subscriber = new Subscriber({

//     name: req.body.name,
//   email: req.body.email,
// password: req.body.password,
//  user_id: req.body.user_id,
//  gender: req.body.gender,
// phone: req.body.phone
//})
//const newSubscriber = await subscriber.save()
//res.status(201).json(newSubscriber);

// } catch (err) {

//   res.status(400).json({ message: err.message })
//}
//});



// Updating One
router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.email != null) {
        res.subscriber.email = req.body.email
    }
    if (req.body.password != null) {
        res.subscriber.password = req.body.password
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({ message: 'Deleted Subscriber' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.subscriber = subscriber
    next()
}

module.exports = router