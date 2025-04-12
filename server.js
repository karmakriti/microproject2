import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import restaurantRoutes from './routes/restaurantRoutes.js';
import menuItemRoutes from './routes/menuItemRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api', restaurantRoutes);
app.use('/api', menuItemRoutes);

const PORT = process.env.PORT || 3000; // OR gate 

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
