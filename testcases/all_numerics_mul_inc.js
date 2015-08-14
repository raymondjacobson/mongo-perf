if ( typeof(tests) != "object" ) {
    tests = [];
}

tests.push( {   name: "Update.Int.Inc", 
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : NumberInt(1) } );
                    }
                    collection.insert(docs);
                    collection.getDB().getLastError();
                },
                ops: [
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $inc: {a: { "#NUMBER_INT": 1 } }
                    }
                }
]});

tests.push( {   name: "Update.Long.Inc", 
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : NumberLong(1) } );
                    }
                    collection.insert(docs);
                    collection.getDB().getLastError();
                },
                ops: [
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $inc: {a: { "#NUMBER_LONG": 1 } }
                    }
                }
]});


tests.push( {   name: "Update.Double.Inc", 
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : 1 } );
                    }
                    collection.insert(docs);
                    collection.getDB().getLastError();
                },
                ops: [
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $inc: {a: { "#NUMBER_DOUBLE": 1 } }
                    }
                }
]});

tests.push( {   name: "Update.Decimal.Inc", 
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : NumberDecimal("1") } );
                    }
                    collection.insert(docs);
                    collection.getDB().getLastError();
                },
                ops: [
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $inc: {a: { "#NUMBER_DECIMAL": 1 } }
                    }
                }
]});

tests.push( {   name: "Update.Int.Mul", 
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : NumberInt(3) } );
                    }
                    collection.insert(docs);
                    collection.getDB().getLastError();
                },
                ops: [
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_INT": 7 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_INT": 11 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_INT": 6 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_INT": 4 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_INT": 7 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $set: {a: { "#NUMBER_INT": 3 } }
                    }
                }
]});

tests.push( {   name: "Update.Long.Mul", 
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : NumberLong(3) } );
                    }
                    collection.insert(docs);
                    collection.getDB().getLastError();
                },
                ops: [
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_LONG": 7 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_LONG": 11 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_LONG": 6 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_LONG": 4 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_LONG": 7 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $set: {a: { "#NUMBER_LONG": 3 } }
                    }
                }
]});


tests.push( {   name: "Update.Double.Mul", 
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : 3 } );
                    }
                    collection.insert(docs);
                    collection.getDB().getLastError();
                },
                ops: [
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_DOUBLE": 7 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_DOUBLE": 11 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_DOUBLE": 6 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_DOUBLE": 4 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_DOUBLE": 7 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $set: {a: { "#NUMBER_DOUBLE": 3 } }
                    }
                }
]});

tests.push( {   name: "Update.Decimal.Mul", 
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : NumberDecimal("3") } );
                    }
                    collection.insert(docs);
                    collection.getDB().getLastError();
                },
                ops: [
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_DECIMAL": 7 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_DECIMAL": 11 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_DECIMAL": 6 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_DECIMAL": 4 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $mul: {a: { "#NUMBER_DECIMAL": 7 } }
                    }
                },
                {
                    op: "update",
                    multi: true,
                    query: {},
                    update: {
                        $set: {a: { "#NUMBER_DECIMAL": 3 } }
                    }
                }
]});