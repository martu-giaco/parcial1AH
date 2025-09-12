import express from 'express';
import { newUser, listUsers, getUserById, deleteUserById, updateUserById } from '../controllers/UsuarioController.js';
const router = express.Router();

router.get('/', listUsers);
router.get('/:id', getUserById);
router.post('/', newUser);
router.delete('/:id', deleteUserById );
router.put('/:id', updateUserById);

export default router;