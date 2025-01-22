var generator = require('../utill/generator')
var memStorage = require('../utill/memoryStorage');
var model = require('../model/NoteModel');

exports.index  = (req,res)=>{
    var seq1 = generator.generate();
    memStorage.store.setItem(seq1,"first seq");
    var seq2 = generator.generate();
    memStorage.store.setItem(seq2,"second seq");

    var noteModel = model.Note;
    var note = new noteModel(seq1,"bla bla ","bla bla bla ...", "Abdallah", new Date());

    var [keys, values] = memStorage.getData(memStorage.store);

    res.json({
        notes: note
    });
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