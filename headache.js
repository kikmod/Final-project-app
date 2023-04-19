const mongoose = require('mongoose')

const headacheSchema = new mongoose.Schema({


    disease_name_headache: {
        type: String,
        required: true,


    },

    Symptoms_disease_headache: {
        type: String,
        required: true

    },
    treatment_headache: {
        type: String,
        required: true

    },

    Effective_Material_headache: {
        type: String,
        required: true

    },

})

module.exports = mongoose.model('headache', headacheSchema)