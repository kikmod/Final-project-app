const express = require('express')
const Kidney = require('../models/kidney')
const router = express.Router()
//const cloudinary = require('cloudinary').v2;

const path = require('path');
//const multer = require('multer');
//const fileFilter = function (req, file, cb) {
//  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//    cb(null, true)
//  } else {
//    cb(new Error('please upload jpeg or png file'), false)
//   }
//};

//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, './kidneyimage3/')
//  },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toDateString() + file.originalname)
//  }
//});

//const upload = multer({
//  storage: storage,
//limits: {
//  fileSize: 1024 * 1024 * 5
//  },
//fileFilter: fileFilter
//});


router.get('/kidneys', async (req, res) => {
    try {
        const kidneys = await Kidney.find()
        res.json(kidneys)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//cloudinary.config({
//   cloud_name: "dckk3cr84",
//api_key: "922144357814857",
//  api_secret: "2R_q7BVyI0i0XuM5thoNU-k1Mhg"
//});


router.get('/kidneys/:id', getkidney, (req, res) => {
    res.json(res.kidney)
})

router.post('/kidneys', async (req, res) => {
    try {
        // Upload the image to Cloudinary
        //  const result = await cloudinary.uploader.upload(req.file.path);
        //const imgUrl = result.secure_url; // Get the uploaded image URL from Cloudinary

        const kidney = new Kidney({
            disease_name_kidney: req.body.disease_name_kidney,
            Symptoms_disease_kidney: req.body.Symptoms_disease_kidney,
            treatment_kidney: req.body.treatment_kidney,
            Effective_Material_kidney: req.body.Effective_Material_kidney,
            //  kidneyimage: imgUrl // Use the Cloudinary image URL as the value for 'myfile'
        });

        const newKidney = await kidney.save();
        res.status(201).json(newKidney);
    } catch (err) {
        res.status(400).json({ message: err.message, error: err });
    }
});
async function getkidney(req, res, next) {
    let kidney
    try {
        kidney = await kidney.findById(req.params.id)
        if (kidney == null) {
            return res.status(404).json({ message: 'cannot find kidney ' })
        }
    } catch (err) {

    }
    res.kidney = kidney
}
module.exports = router