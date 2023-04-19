
const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message: 'your email is not valid',
        }

    },
    password: {
        type: String,
        required: true

    },
    Date: {
        type: Date,
        required: true,
        default: Date.now
    },
    gender:
    {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    user_id:
    {
        type: String,
        required: true
    }
    // patientimage: {
    //   type: String,
    // required: true
    // }

})

module.exports = mongoose.model('Subscriber', subscriberSchema)