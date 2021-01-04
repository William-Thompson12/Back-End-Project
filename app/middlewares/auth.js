const dotenv = require('dotenv')
dotenv.config()
const jwt = require("jsonwebtoken");



exports.authenticateUser = () => (req, res, next) => {
    console.log(req.headers)
    res.send('authenticating')
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};