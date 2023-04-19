//const express = require('express')
//const Login = require('../models/login')
//const router = express.Router()
//const jwt = require('jsonwebtoken');
//const bcrypt = require('bcryptjs');




//router.get('/', async (req, res) => {
//  try {
//    const logins = await Login.find()
//    res.json(logins)
//  } catch (err) {
//    res.status(500).json({ message: err.message })
//  }
//});



//router.get('/:id', getlogin, (req, res) => {
//  res.json(res.login)
//});



///////////////////////////////////////////////////////////////////////

//router.post('/', async (req, res) => {
//try {
//const { email_log, password_log } = req.body;
//const exisitingUser = await Login.findOne({ email_log });
//if (exisitingUser) {
//return res.status(400).json({ msg: "email is already there " });
//}
//const hpassword = await bcrypt.hash(password_log, 8);
//let login = new Login({ email_log, password_log: hpassword });
//login = await login.save();
//res.json(login);
//} catch (e) {
//  res.status(500).json({ error: e.message });
//}
//});



//router.post('/', async (req, res) => {

 // try {
  //  const { email_log, password_log } = req.body;
 //   const login = await Login.findOne({ email_log });
  //  if (!login) {
  //    return res.status(400).json({ msg: " email is not exist " });
 //   }
 //   const ismatch = await bcrypt.compare(password_log, login.password_log);
  //  if (!ismatch) {
  //    return res.status(400).json({ msg: "password is not correct" });
 //   }
 //   const token = jwt.sign({ id: login._id }, "passwordkey");
 //   res.json({ token, ...login._doc });

 // } catch (e) {
 //   res.status(500).json({ error: e.message });
 // }
//});








//router.post('/', async (req, res) => {//
//  const login = new Login({//
//        email_log: req.body.email_log,
//      password_log: req.body.password_log
// })

//try {

// const newLogin = await login.save()
// res.status(201).json(newLogin)

//} catch (err) {
//  res.status(400).json({ message: err.message })
//}
//})

//async function getlogin(req, res, next) {
  //let login
  //try {
   // login = await login.findById(req.params.id)
   // if (login == null) {
   //   return res.status(404).json({ message: 'cannot find login ' })
   // }
  //} catch (err) {

  //}
  //res.login = login
//}

//module.exports = router