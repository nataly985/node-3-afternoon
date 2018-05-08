const swag= require( '../models/swag');

module.exports ={
    read: (req,res, next) => {
        res.send(200).send( swag );
    }
};