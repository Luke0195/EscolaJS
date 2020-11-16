import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';

dotenv.config({ path: '.env' });

import express from 'express';
import routes from './routes/index';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
