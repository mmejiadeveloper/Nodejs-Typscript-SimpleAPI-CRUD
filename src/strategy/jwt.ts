import jwt from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
const JwtStrategy = jwt.Strategy;

const originalOpts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'SECRET_KEY',
    emailVerify: 'accounts.examplesoft.com',
    audience: 'yoursite.net'
};
export default new JwtStrategy(originalOpts, (jwtPayload, done) => {
    if (jwtPayload.email === 'test') {
      return done(null, true);
    }
    return done(null, false);
}); 
