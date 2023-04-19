const express = require('express')
const Ears = require('../models/ears')
const router = express.Router()
//const cloudinary = require('cloudinary').v2;
//const path = require('path');
//const multer = require('multer');

//const fileFilter = function (req, file, cb) {
//  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//    cb(null, true)
//    } else {
//      cb(new Error('please upload jpeg or png file'), false)
//   }
//};

//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, './earsimage7/')
//  },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toDateString() + file.originalname)
//  }
//});

//const upload = multer({
//  storage: storage,
//    limits: {
//      fileSize: 1024 * 1024 * 5
//   },
// fileFilter: fileFilter
//});


//cloudinary.config({
//  cloud_name: "dckk3cr84",
//  api_key: "922144357814857",
// api_secret: "2R_q7BVyI0i0XuM5thoNU-k1Mhg"
//});



router.get('/earss', async (req, res) => {
    try {
        const earss = await Ears.find()
        res.json(earss)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



router.get('/earss/:id', getears, (req, res) => {
    res.json(res.ears)
})

router.post('/earss', async (req, res) => {
    try {
        // Upload the image to Cloudinary
        //const result = await cloudinary.uploader.upload(req.file.path);
        // const imgUrl = result.secure_url; // Get the uploaded image URL from Cloudinary

        const ears = new Ears({
            disease_name_ears: req.body.disease_name_ears,
            Symptoms_disease_ears: req.body.Symptoms_disease_ears,
            treatment_ears: req.body.treatment_ears,
            Effective_Material_ears: req.body.Effective_Material_ears,
            // earsimage: imgUrl // Use the Cloudinary image URL as the value for 'myfile'
        });

        const newEars = await ears.save();
        res.status(201).json(newEars);
    } catch (err) {
        res.status(400).json({ message: err.message, error: err });
    }
});
async function getears(req, res, next) {
    let ears
    try {
        ears = await ears.findById(req.params.id)
        if (ears == null) {
            return res.status(404).json({ message: 'cannot find ears ' })
        }
    } catch (err) {

    }
    res.ears = ears
}
module.exports = router