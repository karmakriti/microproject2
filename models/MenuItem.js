import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Menu item name is required'],
		trim: true,
	},
	price: {
		type: Number,
		required: [true, 'Price is required'],
		min: 0,
	},
	category: {
		type: String,
		required: [true, 'Category is required'],
	},
	restaurantId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Restaurant',
		required: [true, 'Restaurant ID is required'],
	},
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
