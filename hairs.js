const express = require('express')
const Hair = require('../models/hair')
const router = express.Router()
//const cloudinary = require('cloudinary').v2;
//const path = require('path');
//const multer = require('multer');
//const fileFilter = function (req, file, cb) {
//  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//    cb(null, true)
//   } else {
//     cb(new Error('please upload jpeg or png file'), false)
//    }
//};

//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, './hairimage5/')
//   },
// filename: function (req, file, cb) {
//   cb(null, new Date().toDateString() + file.originalname)
//  }
//});

//const upload = multer({
//  storage: storage,
//limits: {
//  fileSize: 1024 * 1024 * 5
//    },
//  fileFilter: fileFilter
//});
//cloudinary.config({
//  cloud_name: "dckk3cr84",
//   api_key: "922144357814857",
//  api_secret: "2R_q7BVyI0i0XuM5thoNU-k1Mhg"
//});


router.get('/hairs', async (req, res) => {
    try {
        const hairs = await Hair.find()
        res.json(hairs)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



router.get('/hairs/:id', gethair, (req, res) => {
    res.json(res.hair)
})

router.post('/hairs', async (req, res) => {
    try {
        // Upload the image to Cloudinary
        //const result = await cloudinary.uploader.upload(req.file.path);
        //const imgUrl = result.secure_url; // Get the uploaded image URL from Cloudinary

        const hair = new Hair({
            disease_name_hair: req.body.disease_name_hair,
            Symptoms_disease_hair: req.body.Symptoms_disease_hair,
            treatment_hair: req.body.treatment_hair,
            Effective_Material_hair: req.body.Effective_Material_hair,
            // hairimage: imgUrl // Use the Cloudinary image URL as the value for 'myfile'
        });

        const newHair = await hair.save();
        res.status(201).json(newHair);
    } catch (err) {
        res.status(400).json({ message: err.message, error: err });
    }
});
async function gethair(req, res, next) {
    let hair
    try {
        hair = await hair.findById(req.params.id)
        if (hair == null) {
            return res.status(404).json({ message: 'cannot find hair ' })
        }
    } catch (err) {

    }
    res.hair = hair
}
module.exports = router