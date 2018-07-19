const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');

const { mongoUri } = require('./config/keys');

const items = require('./routes/api/items');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

mongoose.connect(mongoUri, { useNewUrlParser: true } )
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch(err => {
    console.log(err)
  })

app.use('/api/items', items);

app.listen(PORT, () => {
  console.log(`App is running on PORT: ${PORT}`)
})
