"use strict";
var login_component_1 = require("./login/login.component");
var registration_component_1 = require("./registration/registration.component");
exports.userRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: registration_component_1.RegistrationComponent
    }
];
