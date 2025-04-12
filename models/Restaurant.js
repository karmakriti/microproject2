import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Restaurant name is required'],
		trim: true,
	},
	location: {
		type: String,
		required: [true, 'Location is required'],
	},
	cuisine: {
		type: String,
		required: [true, 'Cuisine type is required'],
	},
	rating: {
		type: Number,
		min: 1,
		max: 5,
		default: 3,
	},
	isOpen: {
		type: Boolean,
		default: true,
	},
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
