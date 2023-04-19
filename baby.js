const mongoose = require('mongoose')

const babySchema = new mongoose.Schema({


    disease_name_baby: {
        type: String,
        required: true,


    },

    Symptoms_disease_baby: {
        type: String,
        required: true

    },
    treatment_baby: {
        type: String,
        required: true

    },

    Effective_Material_baby: {
        type: String,
        required: true

    },

})

module.exports = mongoose.model('baby', babySchema)