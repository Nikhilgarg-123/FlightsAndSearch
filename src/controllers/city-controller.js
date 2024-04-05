const {CityService} = require("../services/index")
const cityService = new CityService();

// post 
// data = req.body
const create =async (req,res) =>{
    try{
       const city= await cityService.createCity(req.body);
       return res.status(201).json({
            data:city,
            success:true,
            message: "Successfully created city",
            err:{}
       });

    }catch(error){
        console.log(error);
        return  res.status(500).json({
        data:{},
        success:false,
        message: "Not able to create a city ",
        err:error
        });
            
    }
}

const destroy = async(req,res) =>{
    try{
        const cityid = req.params.id;
        const city = await cityService.deleteCity(cityid);
        return res.status(200).json({
            data:city,
            success:true,
            message: "Successfully deleted city",
            err:{}
       });

    }catch(error){
        console.log(error);
        return  res.status(500).json({
        data:{},
        success:false,
        message: "Not able to delete a city ",
        err:error
        });
        
    }
}

const get = async(req,res) =>{
    try{
        const cityid = req.params.id;
        const city = await cityService.getCity(cityid);
        return res.status(200).json({
            data:city,
            success:true,
            message: "Successfully fetched city",
            err:{}
       });

    }catch(error){
        console.log(error);
        return  res.status(500).json({
            data:{},
            success:false,
            message: "Not able to fetch a city ",
            err:error
        });
    }
}

const update = (req,res) =>{
    try{
        const cityid = req.params.id;
        const data = req.body;
        const city = cityService.updateCity(cityid, data);
        return res.status(200).json({
            data:city,
            success:true,
            message: "Successfully updated city",
            err:{}
       });


    }catch(err){
        console.log(err);
        return  res.status(500).json({
            data:{},
            success:false,
            message: "Not able to update a city ",
            err:err
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}