const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const { requireAuth, requireRole } = require('../middlewares/authMiddleware');

router.get('/:id/celulas', requireAuth, clienteController.getCelulasByClienteId); 
router.get('/:id', requireAuth, clienteController.getById);
router.get('/', requireAuth, clienteController.getAll);

module.exports = router;
