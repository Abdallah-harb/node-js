class ErrorHandler extends Error{
    constructor(name = "error", status=500 , description=null , isOperational=true) {
        super(description);
        Object.setPrototypeOf(this,new.target.prototype)
        this.name = name;
        this.status = status;
        this.description = description;
        this.isOperational = isOperational;

        Error.captureStackTrace(this);
    }
}

module.exports=ErrorHandler;