const express = require('express')
const Headache = require('../models/headache')
const router = express.Router()
//const cloudinary = require('cloudinary').v2;
//const path = require('path');
//const multer = require('multer');
//const fileFilter = function (req, file, cb) {
//  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//    cb(null, true)
// } else {
//   cb(new Error('please upload jpeg or png file'), false)
//   }
//};

//const storage = multer.diskStorage({
//destination: function (req, file, cb) {
//    cb(null, './patientimage/')
//  },
//    filename: function (req, file, cb) {
//    cb(null, new Date().toDateString() + file.originalname)
//  }
//});

//const upload = multer({
// storage: storage,
//   limits: {
//  fileSize: 1024 * 1024 * 5
//},
//  fileFilter: fileFilter
//});

//cloudinary.config({
//  cloud_name: "dckk3cr84",
//api_key: "922144357814857",
//  api_secret: "2R_q7BVyI0i0XuM5thoNU-k1Mhg"
//});

router.get('/headaches', async (req, res) => {
    try {
        const headaches = await Headache.find()
        res.json(headaches)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



router.get('/headaches/:id', getHeadache, (req, res) => {
    res.json(res.headache)
})

router.post('/headaches', async (req, res) => {
    try {
        // Upload the image to Cloudinary
        //const result = await cloudinary.uploader.upload(req.file.path);
        //const imgUrl = result.secure_url; // Get the uploaded image URL from Cloudinary

        const headache = new Headache({
            disease_name_headache: req.body.disease_name_headache,
            Symptoms_disease_headache: req.body.Symptoms_disease_headache,
            treatment_headache: req.body.treatment_headache,
            Effective_Material_headache: req.body.Effective_Material_headache,
            //  headacheimage: imgUrl // Use the Cloudinary image URL as the value for 'myfile'
        });

        const newHeadache = await headache.save();
        res.status(201).json(newHeadache);
    } catch (err) {
        res.status(400).json({ message: err.message, error: err });
    }
});
async function getHeadache(req, res, next) {
    let headache
    try {
        headache = await headache.findById(req.params.id)
        if (headache == null) {
            return res.status(404).json({ message: 'cannot find headache ' })
        }
    } catch (err) {

    }
    res.headache = headache
}
module.exports = router