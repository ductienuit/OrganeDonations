const express = require('express');
const request = require('request');
const organController = require('../controllers/organ.controller');

const router = express.Router();

router.get('/', organController.getAllOrgan);
router.get('/:id', organController.getOrganDetail);
router.post('/create', organController.createOrgan);
router.put('/:id/update', organController.updateOrgan);

module.exports = router;
