import express from 'express';
import { newMaquina, listMaquinas, getMaquinaById, deleteMaquinaById, updateMaquinaById } from '../controllers/MaquinaController.js';
const router = express.Router();

router.get('/', listMaquinas);
router.get('/:id', getMaquinaById);
router.post('/', newMaquina);
router.delete('/:id', deleteMaquinaById );
router.put('/:id', updateMaquinaById);

export default router;