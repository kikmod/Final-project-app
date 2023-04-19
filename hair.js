const mongoose = require('mongoose')

const hairSchema = new mongoose.Schema({


    disease_name_hair: {
        type: String,
        required: true,


    },

    Symptoms_disease_hair: {
        type: String,
        required: true

    },
    treatment_hair: {
        type: String,
        required: true

    },

    Effective_Material_hair: {
        type: String,
        required: true

    },

})

module.exports = mongoose.model('hair', hairSchema)