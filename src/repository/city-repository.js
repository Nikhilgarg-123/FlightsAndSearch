
const {City} = require("../models/index.js");

class CityRepository {


    async createCity(cityData) {
        try {
            const { cityname } = cityData;
            const city = await City.create({
                 name: cityname 
                });
            return city;
        } catch (error) {
            console.log("something is going wrong in repository layer"); 
            throw error;
        }
    }
    

    async deleteCity(cityid) {
        try{
            await City.destroy({
                where:{
                    id:cityid
                }
            });
            return true;
        }catch(e){
            console.log("something is going wrong in repository layer"); 
            throw {e};
        }
    }



    async updateCity(cityid, city){
        try{
            const x = await City.update(city,{where:{id:cityid}});
            return x;
        }catch(e){
            console.log("something is going wrong in repository layer"); 
            throw {e};
        }
    }

    async getCity(cityid){
        try{
            //const x = await City.findOne({where:{id:cityid}});
            const x= await City.findByPk(cityid)
           
            return x;
        }catch(e){
            console.log("something is going wrong in repository layer"); 
            throw {e};
        }
    }

   

}

module.exports =  CityRepository;