const express = require('express');
const usersRouter = require('./routes/users.js');

const { PORT = 3000 } = process.env;
const app = express();

app.use('/', usersRouter);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
