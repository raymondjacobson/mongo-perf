if ( typeof(tests) != "object" ) {
    tests = [];
}

tests.push( {   name: "RandOps.Double.SmallValue",
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : Math.random() * 100 } );
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
                        $mul: {a: { "#NUMBER_DOUBLE": {"#RAND_INT": [-100,100]} } }
                    }
                }
]});

tests.push( {   name: "RandOps.Decimal.SmallValue",
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : NumberDecimal(Math.random() * 100) } );
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
                        $mul: {a: { "#NUMBER_DECIMAL": {"#RAND_INT": [-100,100]} } }
                    }
                }
]});

tests.push( {   name: "RandOps.Double.LargeValues",
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : Math.random() * 1000000000 } );
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
                        $mul: {a: { "#NUMBER_DOUBLE": {"#RAND_INT": [-100000000,100000000]} } }
                    }
                }
]});

tests.push( {   name: "RandOps.Decimal.LargeValues",
                tags: ['update'], 
                pre: function( collection) {
                    collection.drop();
                    var docs = [];
                    for ( var i = 0; i < 4800; i++ ) {
                        docs.push( { a : NumberDecimal(Math.random() * 1000000000) } );
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
                        $mul: {a: { "#NUMBER_DECIMAL": {"#RAND_INT": [-100000000,100000000]} } }
                    }
                }
]});