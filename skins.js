
const express = require('express');
const cloudinary = require('cloudinary').v2;
const Skin = require('../models/skin');
const router = express.Router();
const path = require('path');
//const multer = require('multer');

//const fileFilter = function (req, file, cb) {
//  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//    cb(null, true)
// } else {
//   cb(new Error('please upload jpeg or png file'), false)
//  }
//};

//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, './patientimage/')
// },
// filename: function (req, file, cb) {
//   cb(null, new Date().toDateString() + file.originalname)
// }
//});

//const upload = multer({
//  storage: storage,
//limits: {
//  fileSize: 1024 * 1024 * 5
//},
//  fileFilter: fileFilter
//});

// Configure Cloudinary with your API credentials
//cloudinary.config({
//  cloud_name: "dckk3cr84",
//api_key: "922144357814857",
//api_secret: "2R_q7BVyI0i0XuM5thoNU-k1Mhg"
//});

router.get('/skins', async (req, res) => {
    try {
        const skins = await Skin.find();
        res.json(skins);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/skins/:id', getskin, (req, res) => {
    res.json(res.skin);
});

router.post('/skins', async (req, res) => {
    try {
        // Upload the image to Cloudinary
        //  const result = await cloudinary.uploader.upload(req.file.path);
        //const imgUrl = result.secure_url; // Get the uploaded image URL from Cloudinary

        const skin = new Skin({
            disease_name_skin: req.body.disease_name_skin,
            Symptoms_disease_skin: req.body.Symptoms_disease_skin,
            treatment_skin: req.body.treatment_skin,
            Effective_Material_skin: req.body.Effective_Material_skin,
            //  skinimage: imgUrl // Use the Cloudinary image URL as the value for 'myfile'
        });

        const newSkin = await skin.save();
        res.status(201).json(newSkin);
    } catch (err) {
        res.status(400).json({ message: err.message, error: err });
    }
});

async function getskin(req, res, next) {
    let skin;
    try {
        skin = await Skin.findById(req.params.id);
        if (skin == null) {
            return res.status(404).json({ message: 'Cannot find patient' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.skin = skin;
    next();
}

module.exports = router;