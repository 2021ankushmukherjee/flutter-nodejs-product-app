
const errorHandeler = (err,req,res,next)=>{

    if(typeof err === "string"){
        return res.status(400).json({message : err.message});
    }

    if(typeof err === "validationError"){
        return res.status(400).json({message: err.message});
    }

    return res.status(500).json({message: err.message})

    next();
}


module.exports = errorHandeler;