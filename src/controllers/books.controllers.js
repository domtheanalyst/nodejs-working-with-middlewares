


function getAllBooks(req, res){
    
        res.status(200).json({message:"akwaa ba!"})
    }


    function createBook(err, req, res, next){

        console.log({message:'error being logged:', err})
    
        res.status(201).json({message:"Book creation request received"})
    }











module.exports = {getAllBooks, createBook};