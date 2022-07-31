import express  from 'express'
const router = express.Router();
import homeController from '../controller/userController.js'


// router.get('/login',homeController.getDoc);
router.post('/login',homeController.userLogin)
router.post('/verify',homeController.verifyOTP)

export default router;