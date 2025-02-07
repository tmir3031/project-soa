import amqp from "amqplib/callback_api.js";

amqp.connect(process.env.RABBITMQ_CONNECT, function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'emails';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        channel.consume(queue, function (msg) {
            const message = JSON.parse(msg.content.toString());

            console.log(
                " Sending email with following info: email: %s, course: %s, teacher: %s, location: %s, duration: %s, startDate: %s, price: %s",
                message.email,
                message.coursename,
                message.teacher,
                message.location,
                message.duration,
                message.startdate,
                message.price);
        }, {
            noAck: true
        });
    });
});

