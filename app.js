const express = require('express');
const bodyParser = require('body-parser');
require('./database');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); 

app.post('/users', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
  