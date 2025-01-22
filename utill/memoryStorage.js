var MemoryStorage = require('memorystorage');
var store = new MemoryStorage('my-notes');

// function to return all data on memory storage .
exports.getData = (store)=>{
    var keys = [];
    var values = [];

    for (var i = 0; i < store.length; i++) {
        var key = store.key(i);
        keys.push(key);
        values.push(store.getItem(key));
    }
    return [keys, values];
}

exports.store = store;
