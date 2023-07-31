const express = require('express');

const userRoute = require('./user.route');

const subscriptionRoute = require('./subscription.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/users',
        route: userRoute,
    },
    {
        path: '/subscription',
        route: subscriptionRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
