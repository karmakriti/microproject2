import express from 'express';
import {
	createMenuItem,
	getMenuItems,
	getMenuItemById,
	updateMenuItem,
	deleteMenuItem,
} from '../controllers/menuItemController.js';

const router = express.Router();

router.post('/menu-items', createMenuItem);
router.get('/menu-items', getMenuItems);
router.get('/menu-items/:id', getMenuItemById);
router.put('/menu-items/:id', updateMenuItem);
router.delete('/menu-items/:id', deleteMenuItem);

export default router;
