import Restaurant from '../models/Restaurant.js';

export const createRestaurant = async (req, res) => {
	try {
		const restaurant = new Restaurant(req.body);
		await restaurant.save();
		res.status(201).json({ message: 'Restaurant created successfully', restaurant });
	} catch (error) {
		res.status(400).json({ message: 'Error creating restaurant', error: error.message });
	}
};

export const getRestaurants = async (req, res) => {
	try {
		const restaurants = await Restaurant.find();
		res.status(200).json(restaurants);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching restaurants', error: error.message });
	}
};

export const getRestaurantById = async (req, res) => {
	try {
		const restaurant = await Restaurant.findById(req.params.id);
		if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
		res.status(200).json(restaurant);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching restaurant', error: error.message });
	}
};

export const updateRestaurant = async (req, res) => {
	try {
		const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
		res.status(200).json({ message: 'Restaurant updated successfully', restaurant });
	} catch (error) {
		res.status(400).json({ message: 'Error updating restaurant', error: error.message });
	}
};

export const deleteRestaurant = async (req, res) => {
	try {
		const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
		if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
		res.status(200).json({ message: 'Restaurant deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error deleting restaurant', error: error.message });
	}
};
