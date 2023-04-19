const express = require('express')
const Eyes = require('../models/eyes')
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
//  destination: function (req, file, cb) {
//    cb(null, './eyesimage6/')
//   },
// filename: function (req, file, cb) {
//   cb(null, new Date().toDateString() + file.originalname)
//    }
//});

//const upload = multer({
//  storage: storage,
//  limits: {
//    fileSize: 1024 * 1024 * 5
//  },
//fileFilter: fileFilter
//});


//cloudinary.config({
//  cloud_name: "dckk3cr84",
// api_key: "922144357814857",
// api_secret: "2R_q7BVyI0i0XuM5thoNU-k1Mhg"
//});


router.get('/eyess', async (req, res) => {
    try {
        const eyess = await Eyes.find()
        res.json(eyess)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



router.get('/eyess/:id', geteyes, (req, res) => {
    res.json(res.eyes)
})

router.post('/eyess', async (req, res) => {
    try {
        // Upload the image to Cloudinary
        //const result = await cloudinary.uploader.upload(req.file.path);
        //const imgUrl = result.secure_url; // Get the uploaded image URL from Cloudinary

        const eyes = new Eyes({
            disease_name_eyes: req.body.disease_name_eyes,
            Symptoms_disease_eyes: req.body.Symptoms_disease_eyes,
            treatment_eyes: req.body.treatment_eyes,
            Effective_Material_eyes: req.body.Effective_Material_eyes
            //eyesimage: imgUrl //req.body.eyesimage  // Use the Cloudinary image URL as the value for 'myfile'
        });

        const newEyes = await eyes.save();
        res.status(201).json(newEyes);
    } catch (err) {
        res.status(400).json({ message: err.message, error: err });
    }
});
async function geteyes(req, res, next) {
    let eyes
    try {
        eyes = await eyes.findById(req.params.id)
        if (eyes == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.eyes = eyes
    next()
}
module.exports = router