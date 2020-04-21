"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_jwt_1 = __importDefault(require("passport-jwt"));
var passport_jwt_2 = require("passport-jwt");
var JwtStrategy = passport_jwt_1.default.Strategy;
var originalOpts = {
    jwtFromRequest: passport_jwt_2.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'SECRET_KEY',
    emailVerify: 'accounts.examplesoft.com',
    audience: 'yoursite.net'
};
exports.default = new JwtStrategy(originalOpts, function (jwtPayload, done) {
    if (jwtPayload.email === 'test') {
        return done(null, true);
    }
    return done(null, false);
});
//# sourceMappingURL=jwt.js.map