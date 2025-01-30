exports.Store = class Store{
    constructor(id,name,code,address,created_at) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.address = address;
        this.created_at = created_at;
    }
}