const Rezervacija = require('../models/Rezervacija');
const rezRouter = require('express').Router();

rezRouter.get('/', async (req, res) => res.json(await Rezervacija.findAll()));
rezRouter.get('/:id', async (req, res) => res.json(await Rezervacija.findByPk(req.params.id)));
rezRouter.post('/', async (req, res) => res.json(await Rezervacija.create(req.body)));
rezRouter.put('/:id', async (req, res) => {
  await Rezervacija.update(req.body, { where: { ID_rezervacije: req.params.id } });
  res.json({ message: 'Ažurirano' });
});
rezRouter.delete('/:id', async (req, res) => {
  await Rezervacija.destroy({ where: { ID_rezervacije: req.params.id } });
  res.json({ message: 'Obrisano' });
});

module.exports = rezRouter;