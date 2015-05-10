var logger = require('./logger'),
    event_router = require('./lib/event_router'),
    web_router = requre('./lib/web_router'),
    rabbitmq = require('rabbit.js');


logger.info('running');

// hook to allow for declaring routes
web_router.running();

var context = rabbitmq.createContext(
    'amqp://' + process.env.RABBITMQ_PORT_5672_TCP_ADDR + ':' + process.env.RABBITMQ_PORT_5672_TCP_PORT
);

context.on('ready', function() {

    web_router.connected();

    logger.info('connected');

    // parameterise the queue name
    var queue = 'events';

    var sub = context.socket('SUB'),
        pub = context.socket('PUB');

    pub.connect(queue, function() {
        sub.connect(queue, function () {
            // deal with facts as they come in
            sub.on('data', function(body) {
                event_router.newFact(sub, pub, JSON.parse(body));
            });
        });
    });
});
