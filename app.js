import express from 'express';
import morgan from 'morgan';
import courseRoutes from './routes/courseRoutes.js';
import { globalErrorHandler } from './middlewares/errorMiddleware.js';
import { AppError } from './utils/AppError.js';


const app = express();

app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));


app.get('/favicon.png', (req, res) => res.status(204).end());
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/courses', courseRoutes);
app.use(globalErrorHandler);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


export default app;
