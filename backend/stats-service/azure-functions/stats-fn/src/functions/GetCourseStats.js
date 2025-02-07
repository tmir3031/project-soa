const { app } = require('@azure/functions');

app.http('GetCourseStats', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
        // const totalCourses = 10;
        //
        // context.res = {
        //     status: 200,
        //     body: { total_courses: totalCourses }
        // };
    }
});

