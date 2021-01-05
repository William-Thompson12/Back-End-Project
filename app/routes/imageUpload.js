const router = require("express").Router();
const upload = require('../services/fileUpload')
const singleUpload = upload.single('image');



router.post('/image-upload', function(req,res) {
    singleUpload(req, res, function(error) {
        return res.json({
            'imageUrl':req.file.location
        })
    })
})

module.exports = router;