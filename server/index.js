import express from 'express';
import connectDB from './db/connect.js';
import userRouter from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
const port = process.env.port;

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Declarando el uso de userRouter
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, console.log(`Server running in ${process.env.LOCALHOST_URL} mode on port ${port}`));