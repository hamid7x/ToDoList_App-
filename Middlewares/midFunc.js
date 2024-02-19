exports.midFunc = (req, res, next) =>{
    
    // console.log(req.headers);
    // if(req.headers.dnt == 5) next();
    // else{
    //     res.json('u r not allowed to this')
    // } 
    next()
}