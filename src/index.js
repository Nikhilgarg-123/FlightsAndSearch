const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverconfig');


const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
  });
};

setupAndStartServer();