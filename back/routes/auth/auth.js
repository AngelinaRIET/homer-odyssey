const express = require('express');
const connection = require('./../../helpers/db');
const router = express.Router();


// in Postman, add users in url http://localhost:5000/auth/signup
router.post('/signup', function(req, res, next) {
   const q = `INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)`;
   const userInfo = req.body;
   connection.query(q,[userInfo.email, userInfo.password, userInfo.name, userInfo.lastname], (error, results, fields) => {
      if (error)
         res.status(500).json({ flash:  error.message });
      else
         res.status(200).json({ flash:  "User has been signed up!" });
      res.end();
   })
});

module.exports = router;
