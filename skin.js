
const mongoose = require('mongoose')

const skinSchema = new mongoose.Schema({


    disease_name_skin: {
        type: String,
        required: true,


    },

    Symptoms_disease_skin: {
        type: String,
        required: true

    },
    treatment_skin: {
        type: String,
        required: true

    },

    Effective_Material_skin: {
        type: String,
        required: true

    },

})

module.exports = mongoose.model('skin', skinSchema)