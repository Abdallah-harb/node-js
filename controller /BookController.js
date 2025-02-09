var queries = require('../database/query');
var db_connection = require('../database/connection');

exports.index = async (req,res)=>{





}

exports.store = async (req,res)=>{
    try{
        var {title ,description ,isbn ,author, publisher, pages, store_id} = req.body;

        if(!title || !description || !isbn || !author || !publisher || !pages || !store_id){
            return  res.status(422).json({
                status:422,
                message:'all fields  is required .'
            });
        }
        var store = await db_connection.query(queries.storeQuery.find,[req.body.store_id]);

        if(store.rows.length < 1){
            return res.status(500).json({
                status: 500,
                message: 'A store selected not  exists.',
            });
        }
        var checkISBn = await db_connection.query(queries.bookQuery.checkISBN,[req.body.isbn]);

        if(checkISBn.rows.length > 0){
            return res.status(422).json({
                status: 422,
                message: 'isbn is already exists.',
            });
        }

        var values = [title ,description ,isbn ,author, publisher, pages, store_id];
        var book = await db_connection.query(queries.bookQuery.store,values);
        return  res.status(200).json({
            status:200,
            message : "data stored successfully",
        });

    }catch (e) {
        return  res.status(500).json({
            status:500,
            message : e.message
        });
    }

}

exports.find = async (req,res)=>{

}

exports.update = async (req,res)=>{

}

exports.delete = async (req,res)=>{

}