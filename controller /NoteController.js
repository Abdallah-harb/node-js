var generator = require('../utill/generator')

exports.index  = (req,res)=>{
    var sequence    = generator.generate();
    res.send('all Notes .!' + sequence);
}

exports.store = (req,res)=>{
    res.send('Data stored successfully .!');
}

exports.update = (req,res)=>{
    res.send('Data updated successfully .!');
}

exports.delete = (req,res)=>{
    res.send('Data deleted successfully .!');
}