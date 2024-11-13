import express from 'express';
import initializeDatabase from './src/database/db';
import userRouter from './src/routes/user';
import channelRoutes from './src/routes/channel';
import packageRoutes from './src/routes/package';
import planRoutes from './src/routes/plan';
import subscriptionRoutes from './src/routes/subscription';
import { authMiddleware } from './src/middlewares/auth';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000

app.use('/user', userRouter)
app.use('/channel', authMiddleware, channelRoutes);
app.use('/package', authMiddleware, packageRoutes);
app.use('/plan', authMiddleware, planRoutes);
app.use('/subscription', authMiddleware, subscriptionRoutes);

const start = async () => {
    await initializeDatabase();
    app.listen(port, () => console.log(`Server is fire on port ${port}`));
};

start();
