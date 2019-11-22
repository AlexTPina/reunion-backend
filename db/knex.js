const express = require('express');
const router = express.Router();
const classmatesController = require('../controllers/classmates');

/* GET All classmates */
router.get('/', classmatesController.getAllClassmates)
router.get('/:id', classmatesController.getOneClassmate)
router.post('/', classmatesController.addOneClassmate)
router.patch('/:id', classmatesController.updateOneClassmate)
router.delete('/:id', classmatesController.removeOneClassmate)

module.exports = router;