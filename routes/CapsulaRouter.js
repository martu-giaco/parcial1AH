import express from 'express';
import { newCapsula, listCapsulas, getCapsulaById, deleteCapsulaById, updateCapsulaById } from '../controllers/CapsulaController.js';
const router = express.Router();

router.get('/', listCapsulas);
router.get('/:id', getCapsulaById);
router.post('/', newCapsula);
router.delete('/:id', deleteCapsulaById );
router.put('/:id', updateCapsulaById);

export default router;