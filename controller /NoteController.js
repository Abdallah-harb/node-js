var generator = require('../utill/generator')
var memStorage = require('../utill/memoryStorage');
var model = require('../model/NoteModel');
var noteModel = model.Note;

exports.index  = (req,res)=>{
    var  [keys,values] = memStorage.getData(memStorage.store);
   return  res.status(200).json({
       status:200,
       message : "all notes",
       notes: values
    });
}

// store note
exports.store = (req,res)=>{
    var id = generator.generate();
    var title = req.body.title;
    var content = req.body.content;
    var created_by = "Abdallah";
    var created_at = new Date();

    if(!title || !content){
      return  res.status(422).json({
          status:422,
          message:'title and content is required .'
      });
    }

    var note = new noteModel(id,title,content, created_by, created_at);
    memStorage.store.setItem(id,note);

    return res.status(200).json({
        status:200,
        message: 'Data stored successfully!',
        notes: note
    });
}


exports.update = (req,res)=>{
    var { title, content } = req.body;
    var created_by = "Abdallah";
    var created_at = new Date();

    if(!title || !content ){
        return  res.status(422).json({
            status:422,
            message:'note  title and content is required .'
        });
    }

     var existingNote = memStorage.store.getItem(req.params['id']);

    if(!existingNote){
        return  res.status(404).json({
            status:404,
            message:'Note Not Found  .'
        });
    }

    var note = new noteModel(req.params['id'],title,content, created_by, created_at);
    memStorage.store.setItem(id,note);
    return res.status(200).json({
        status:200,
        message: 'Data updated successfully .!'
    });
}

exports.delete = (req,res)=>{
    var note = memStorage.store.getItem(req.params['id']);
    if(!note){
        return  res.status(404).json({
            status:404,
            message:'Note Not Found  .'
        });
    }
    memStorage.store.removeItem(req.params['id']);

    return res.status(200).json({
        status:200,
        message: 'Data deleted successfully .!'
    });
}