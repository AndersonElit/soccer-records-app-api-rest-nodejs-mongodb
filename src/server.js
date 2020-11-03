import express, { json } from 'express';

const app = express();

//Routes
import IndexRoutes from './routes/index.routes'
import LeaguesRoutes from './routes/leagues.routes'

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(json());

//Routes
app.use(IndexRoutes);
app.use('/leagues', LeaguesRoutes);

export default app;