
const mongoose = require('mongoose')

const eyesSchema = new mongoose.Schema({


    disease_name_eyes: {
        type: String,
        required: true,


    },

    Symptoms_disease_eyes: {
        type: String,
        required: true

    },
    treatment_eyes: {
        type: String,
        required: true

    },

    Effective_Material_eyes: {
        type: String,
        required: true

    },
    //  eyesimage: {
    //    type: String,
    //  required: true
    // }
})

module.exports = mongoose.model('eyes', eyesSchema)