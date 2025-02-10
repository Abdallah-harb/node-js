const pool = require('./pool');
exports.query =(queryText,queryParams)=>{
    return new Promise((resolve ,reject)=>{
        pool.query(queryText,queryParams)
            .then(res =>{
                resolve(res);
            })
            .catch(error =>{
                reject(error);
            });
    });
}

exports.getClient = async () => {
    return  await pool.connect();

};