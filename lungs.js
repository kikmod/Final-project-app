const mongoose = require('mongoose')

const lungsSchema = new mongoose.Schema({


    disease_name_lungs: {
        type: String,
        required: true,


    },

    Symptoms_disease_lungs: {
        type: String,
        required: true

    },
    treatment_lungs: {
        type: String,
        required: true

    },

    Effective_Material_lungs: {
        type: String,
        required: true

    },

})

module.exports = mongoose.model('lungs', lungsSchema)