const express = require('express')
const authController = require('../controllers/authController');
const { identifier } = require('../middlewares/identification');

const router = express.Router();
router.post('/signup',authController.signup);
router.post('/signin',authController.signin);
router.post('/signout',identifier,authController.signout);

router.patch('/send-verification-code',identifier,authController.sendVerificationCode) 
router.patch('/verify-verification-code',identifier,authController.verificationCode) 
router.patch('/changePassword',identifier,authController.changePassword) 
router.patch('/send-forgetPassword-code',authController.sendForgetPasswordCode) 
router.patch('/verify-forgetPassword-code',identifier,authController.verifyForgetPasswordCode) 
module.exports=router;
