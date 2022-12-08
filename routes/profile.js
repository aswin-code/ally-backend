const router = require('express').Router()
const profileController = require('../controller/profile')
const multer = require('multer')
const storage = multer.diskStorage({})
const upload = multer({ storage })
router.route('/')
    .get(profileController.getProfile)
    .post(upload.single('image'), profileController.updateProfilePic)

module.exports = router