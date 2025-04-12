import express from 'express';
import {
	createRestaurant,
	getRestaurants,
	getRestaurantById,
	updateRestaurant,
	deleteRestaurant,
} from '../controllers/restaurantController.js';

const router = express.Router();

router.post('/restaurants', createRestaurant);
router.get('/restaurants', getRestaurants);
router.get('/restaurants/:id', getRestaurantById);
router.put('/restaurants/:id', updateRestaurant);
router.delete('/restaurants/:id', deleteRestaurant);

export default router;
