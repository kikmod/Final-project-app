const express = require('express')
const Baby = require('../models/baby')
const router = express.Router()
//const cloudinary = require('cloudinary').v2;
//const path = require('path');
//const multer = require('multer');
///const fileFilter = function (req, file, cb) {
//    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//      cb(null, true)
//    } else {
//      cb(new Error('please upload jpeg or png file'), false)
//}
//};

//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, './babyimage8/')
//  },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toDateString() + file.originalname)
//    }
//});

//const upload = multer({
//   storage: storage,
// limits: {
//   fileSize: 1024 * 1024 * 5
// },
//fileFilter: fileFilter
//});

// Configure Cloudinary with your API credentials
///cloudinary.config({
// cloud_name: "dckk3cr84",
// api_key: "922144357814857",
// api_secret: "2R_q7BVyI0i0XuM5thoNU-k1Mhg"
//});



router.get('/babys', async (req, res) => {
    try {
        const babys = await Baby.find()
        res.json(babys)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



router.get('/babys/:id', getbaby, (req, res) => {
    res.json(res.baby)
})

router.post('/babys', async (req, res) => {
    try {
        // Upload the image to Cloudinary
        // const result = await cloudinary.uploader.upload(req.file.path);
        //const imgUrl = result.secure_url; // Get the uploaded image URL from Cloudinary

        const baby = new Baby({
            disease_name_baby: req.body.disease_name_baby,
            Symptoms_disease_baby: req.body.Symptoms_disease_baby,
            treatment_baby: req.body.treatment_baby,
            Effective_Material_baby: req.body.Effective_Material_baby,
            // babyimage: imgUrl // Use the Cloudinary image URL as the value for 'myfile'
        });

        const newBaby = await baby.save();
        res.status(201).json(newBaby);
    } catch (err) {
        res.status(400).json({ message: err.message, error: err });
    }
});
async function getbaby(req, res, next) {
    let baby
    try {
        baby = await baby.findById(req.params.id)
        if (baby == null) {
            return res.status(404).json({ message: 'cannot find baby ' })
        }
    } catch (err) {

    }
    res.baby = baby
}
module.exports = router