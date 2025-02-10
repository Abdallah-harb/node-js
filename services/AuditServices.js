var events = require('events');

var emitter = new events.EventEmitter();
var audit = require('../model/AuditModel');
var queries = require('../database/query');
var db_connection = require('../database/connection');
const emitterEvent = 'audit';

 emitter.on(emitterEvent,async function (audit) {
        // save activity on db
     var data = [audit.action,audit.model,JSON.stringify(audit.info), audit.created_by, audit.created_at];
     await  db_connection.query(queries.AuditQuery.store,data);
});

exports.prepareAudit = async function (action,model,info){
    var data = new audit.Audit(action,model,info);
   emitter.emit(emitterEvent, data);
}