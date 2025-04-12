import MenuItem from '../models/MenuItem.js';

export const createMenuItem = async (req, res) => {
	try {
		const menuItem = new MenuItem(req.body);
		await menuItem.save();
		res.status(201).json({ message: 'Menu item created successfully', menuItem });
	} catch (error) {
		res.status(400).json({ message: 'Error creating menu item', error: error.message });
	}
};

export const getMenuItems = async (req, res) => {
	try {
		const menuItems = await MenuItem.find();
		res.status(200).json(menuItems);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching menu items', error: error.message });
	}
};

export const getMenuItemById = async (req, res) => {
	try {
		const menuItem = await MenuItem.findById(req.params.id);
		if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
		res.status(200).json(menuItem);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching menu item', error: error.message });
	}
};

export const updateMenuItem = async (req, res) => {
	try {
		const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
		res.status(200).json({ message: 'Menu item updated successfully', menuItem });
	} catch (error) {
		res.status(400).json({ message: 'Error updating menu item', error: error.message });
	}
};

export const deleteMenuItem = async (req, res) => {
	try {
		const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
		if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
		res.status(200).json({ message: 'Menu item deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error deleting menu item', error: error.message });
	}
};
