exports.Audit = class Audit{
    constructor(action,model,info,created_by,created_at) {
        this.action= action;
        this.model = model;
        this.info = info;
        this.created_by = "abdallah_zain";
        this.created_at = new Date().toISOString();
    }
}