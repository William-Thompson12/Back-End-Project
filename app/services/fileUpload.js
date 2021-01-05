require('dotenv').config()
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
 
const s3 = new aws.S3({
    accessKeyId: process.env.AWS_AccessKey_Id,
    secretAccessKey: process.env.AWS_Secret_Key,
})
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'crushn-profile',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    },
    acl:'public-read',
  })
})

module.exports = upload;