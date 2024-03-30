const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverconfig');

const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const cityRepository = new CityRepository();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    try {
     
      cityRepository.getCity(5);
    } catch (error) {
      console.error(error);
    }
  });
};

setupAndStartServer();