exports.Note = class Note{
    constructor(id,title,content,created_by,created_at) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_by = created_by;
        this.created_at = created_at;
    }
}