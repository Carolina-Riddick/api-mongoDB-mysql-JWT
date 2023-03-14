const customHeader = (req, res, next) => {
    try{
        const {apikey} = req.headers;
        if(apikey === "caro"){
            next();
        } else {
            res.status(403).send({error : "INVALID API KEY"})
        }
    } catch(err) {
        res.status(403).send({error : "PROBLEM WITH CUSTOM HEADER"})
    }
}

module.exports = customHeader;