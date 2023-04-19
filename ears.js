const mongoose = require('mongoose')

const earsSchema = new mongoose.Schema({


    disease_name_ears: {
        type: String,
        required: true,


    },

    Symptoms_disease_ears: {
        type: String,
        required: true

    },
    treatment_ears: {
        type: String,
        required: true

    },

    Effective_Material_ears: {
        type: String,
        required: true

    },

})

module.exports = mongoose.model('ears', earsSchema)