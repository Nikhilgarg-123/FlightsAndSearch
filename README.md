/

    - src/
        index.js //server
        models/
        utils/
        services/
        config/
        controllers/
        middlewares/
        repository/

    -tests/ [later]
    -static/
    -temp/
    

clone the project on your local
Execute npm install on the same path as of your root directory of teh downloaded project
Create a .env file in the root directory and add the following environment variable

PORT=3000

Inside the src/config/config.json folder edit the following  piece of json
/
    "development": {
        "username": "root",   // username of your sql
        "password": "root",   // password of your sql
        "database": "Flights_search_db_development",       // naem of the database
        "host": "127.0.0.1",
        "dialect": "mysql"
    },


Workflow configuration
Models => repository => Service => controllers => routes 
/
        
    router.post('/city',CityController.create)                  //localhost:3000/api/v1/city/
    router.delete('/city/:id',CityController.destroy);          //localhost:3000/api/v1/city/6
    router.get('/city/:id',CityController.get);                 //localhost:3000/api/v1/city/5
    router.patch('/city/:id',CityController.update);            //localhost:3000/api/v1/city/5
    router.get('/city',CityController.getall);                  //localhost:3000/api/v1/city/




