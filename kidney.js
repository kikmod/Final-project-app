const mongoose = require('mongoose')

const kidneySchema = new mongoose.Schema({


    disease_name_kidney: {
        type: String,
        required: true,


    },

    Symptoms_disease_kidney: {
        type: String,
        required: true

    },
    treatment_kidney: {
        type: String,
        required: true

    },

    Effective_Material_kidney: {
        type: String,
        required: true

    },


})

module.exports = mongoose.model('kidney', kidneySchema)