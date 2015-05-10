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

    // subscribe to events queues
    var sub = context.socket('SUB');

    // parameterise the queue name

    sub.connect('events', function() {

        // deal with facts as they come in
        sub.on('data', function(body) {
            event_router.newFact(JSON.parse(body));
        });
    });
});
