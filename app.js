const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '60b2b7c48fd0e625d19aad94'
  };

  next();
});
app.use('/', usersRouter);
app.use('/', cardsRouter);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
