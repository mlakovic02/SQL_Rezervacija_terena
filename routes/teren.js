const express = require('express');
const router = express.Router();
const Teren = require('../models/Teren');

router.get('/', async (req, res) => res.json(await Teren.findAll()));
router.get('/:id', async (req, res) => res.json(await Teren.findByPk(req.params.id)));
router.post('/', async (req, res) => res.json(await Teren.create(req.body)));
router.put('/:id', async (req, res) => {
  await Teren.update(req.body, { where: { ID_terena: req.params.id } });
  res.json({ message: 'Ažurirano' });
});
router.delete('/:id', async (req, res) => {
  await Teren.destroy({ where: { ID_terena: req.params.id } });
  res.json({ message: 'Obrisano' });
});

module.exports = router;