const express = require('express');
const Lungs = require('../models/lungs');
const router = express.Router();
//const cloudinary = require('cloudinary').v2;
const path = require('path');
//const multer = require('multer');

//const fileFilter = function (req, file, cb) {
//  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//    cb(null, true)
//  } else {
//    cb(new Error('please upload jpeg or png file'), false)
//    }
//};

//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, './lungsimage2/')
//   },
// filename: function (req, file, cb) {
//   cb(null, new Date().toDateString() + file.originalname)
// }
//});

//const upload = multer({
//  storage: storage,
//limits: {
//  fileSize: 1024 * 1024 * 5
//   },
// fileFilter: fileFilter
//});







//cloudinary.config({
//  cloud_name: "dckk3cr84",
//api_key: "922144357814857",
//  api_secret: "2R_q7BVyI0i0XuM5thoNU-k1Mhg"
//});



router.get('/lungss', async (req, res) => {
    try {
        const lungss = await Lungs.find()
        res.json(lungss)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



router.get('/lungss/:id', getlungs, (req, res) => {
    res.json(res.lungs)
})

router.post('/lungss', async (req, res) => {
    try {
        // Upload the image to Cloudinary
        // const result = await cloudinary.uploader.upload(req.file.path);
        //const imgUrl = result.secure_url; // Get the uploaded image URL from Cloudinary

        const lungs = new Lungs({
            disease_name_lungs: req.body.disease_name_lungs,
            Symptoms_disease_lungs: req.body.Symptoms_disease_lungs,
            treatment_lungs: req.body.treatment_lungs,
            Effective_Material_lungs: req.body.Effective_Material_lungs,
            // lungssimage: imgUrl // Use the Cloudinary image URL as the value for 'myfile'
        });

        const newLungs = await lungs.save();
        res.status(201).json(newLungs,);
    } catch (err) {
        res.status(400).json({ message: err.message, error: err });
    }
});

async function getlungs(req, res, next) {
    let lungs
    try {
        lungs = await lungs.findById(req.params.id)
        if (lungs == null) {
            return res.status(404).json({ message: 'cannot find lungs ' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.lungs = lungs
    next()
}
module.exports = router