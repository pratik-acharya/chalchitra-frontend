"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var auth_service_1 = require("./auth.service");
var UserService = (function () {
    function UserService(_http, _config, _authService) {
        if (_authService === void 0) { _authService = auth_service_1.AuthService; }
        this._http = _http;
        this._config = _config;
        this._authService = _authService;
    }
    UserService.prototype.getAll = function () {
        return this._http.get(this._config.apiUrl + '/users', this._authService);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
