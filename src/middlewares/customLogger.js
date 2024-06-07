const {format} = require('date-fns');

const fs = require('fs');

const fsPromises = require('fs').promises;

const path = require('path');

async function customLogger(req, res, next){

    const datetime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`

    const log = `${req.baseUrl} ${req.url} ${datetime}`;

    try {
            if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){

               await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
            }

            await fsPromises.appendFile(
                
                path.join(__dirname, '..', 'logs', 'apiLogs'), 
            
                log

            );


    } catch (error) {

        console.log(error)
        
    }

    next();
}


module.exports = customLogger;