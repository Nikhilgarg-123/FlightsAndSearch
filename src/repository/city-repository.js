
const {City} = require("../models/index.js");

class CityRepository {


    async createCity(cityData) {
        try {
            const { cityname } = cityData;
            const city = await City.create({ name: cityname });
            return city;
        } catch (error) {
            throw error;
        }
    }
    

    async deleteCity(cityid) {
        try{
            const x = await City.destroy({where:{id:cityid}});
            return x;
        }catch(e){
            throw {e};
        }
    }

   

}

module.exports =  CityRepository;