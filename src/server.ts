import { createConnection, Connection } from "typeorm";
import express from "express";
import path from 'path';
import indexRouter from "./routes/index";
import "reflect-metadata";
import APICustomersRouter from "./routes/API/Costumers";
import WSUsersAccess from "./routes/API/Users";
import passport from "passport";
import passportJwtServerData from "./strategy/jwt";

class Server {
  connection: Connection;
  app: any;
  routes: any;

  constructor() {
    this.app = express();
  }

  private setServerBodyReponse() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private setPassportMiddleware() {
    passport.use(passportJwtServerData);
  }

  private setRoutes(connection: Connection) {
    this.routes = APICustomersRouter(connection).router;
  }

  private setViewsConfiguration(){
    this.app.set('views', path.join(__dirname, '../views'));
    this.app.set('view engine', 'ejs');
  }

  private setApiRoutes(){
    this.app.use('/', indexRouter);
    this.app.use('/APIcustomers', passport.authenticate('jwt', { session: false }), this.routes);
    this.app.use('/usersAccess', async function (req, res) {
      const user =  new WSUsersAccess();
      res.send(await user.getAndVerifyUserCredentials(req.body.email, req.body.password));
    })
  }

  private setListenPort(){
    this.app.listen(3500, () => console.log('Server runing at port 3500!'));
  }

  private initializeServerConfiguration( connectionObject : Connection ){
    this.setPassportMiddleware();
    this.setRoutes(connectionObject);
    this.setViewsConfiguration();
    this.setApiRoutes();
    this.setListenPort();
  }

  public openConection() {
    this.setServerBodyReponse();
    createConnection().then(async connection => {
      this.initializeServerConfiguration(connection);
    }).catch((error) => {
      // console.log('Server not able. Status: ' + error.errno);
      console.log(error);
    });
  }

}

const server = new Server();
server.openConection();