var queries = require('../database/query');
var db_connection = require('../database/connection');

var Logger = require('../services/logger.sercices');
const logger = new Logger('StoreController ');

exports.index = async (req,res)=>{
    try {
        var stores = await db_connection.query(queries.storeQuery.index);
        logger.info('all store',stores['rows']);
        return  res.status(200).json({
            status:200,
            message : "all stores",
            stores: stores['rows']
        });
    }catch (e) {
        logger.error('all store',e.message);
        return  res.status(e.status).json({
            status:e.status,
            message : e.message
        });
    }

}

exports.store = async (req,res)=>{
    try {
        var {name,address} = req.body;
        if(!name || !address){
            return  res.status(422).json({
                status:422,
                message:'store name  and name is required .'
            });
        }
        var code = `#_${name.replace(/\s+/g, '').toLowerCase()}${Math.floor(Math.random() * 9000) + 1000}$ab`;
        var values = [name,code,address];

        var store = await db_connection.query(queries.storeQuery.store,values);

        return  res.status(200).json({
            status:200,
            message : "data created successfully",
        });

    }catch (e) {
        return  res.status(500).json({
            status:500,
            message : e.message
        });
    }
}

exports.update =async (req,res)=>{
    try {
        var store = await db_connection.query(queries.storeQuery.find,[req.params['id']]);

        if(!store.rows.length > 0){
            return  res.status(500).json({status:500, message:'store not found '});
        }
        var {name,address} = req.body;
        if(!name || !address){
            return  res.status(422).json({
                status:422,
                message:'store name  and name is required .'
            });
        }

        var existingStore = await db_connection.query(queries.storeQuery.findByNameExcludingId, [name, req.params['id']]);

        if (existingStore.rows.length > 0) {
            return res.status(409).json({
                status: 409,
                message: 'A store with this name already exists.',
            });
        }


        var values = [name,address,req.params['id']];

         await db_connection.query(queries.storeQuery.update,values);

        return  res.status(200).json({
            status:200,
            message : "data updated  successfully",
        });

    }catch (e) {
        return  res.status(500).json({
            status:500,
            message : e.message
        });
    }
}

exports.delete =async (req,res)=>{
    try {
        var store = await db_connection.query(queries.storeQuery.find,[req.params['id']]);
        if(!store.rows.length > 0){
            return  res.status(500).json({status:500, message:'store not found '});
        }

        db_connection.query(queries.storeQuery.delete,[req.params['id']]);
        return  res.status(200).json({
            status:200,
            message : "store Deleted successfully.",
        });

    }catch (e) {
        return  res.status(500).json({
            status:500,
            message : e.message
        });
    }
}