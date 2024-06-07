function validateBookCreation(req, res, next){

    let data = req.body;

    if(!data.title && !data.author){

        throw new Error('Book and author required');
    }

    next(err);
}


module.exports = validateBookCreation;