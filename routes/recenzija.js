const Recenzija = require('../models/Recenzija');
const recRouter = require('express').Router();

recRouter.get('/', async (req, res) => res.json(await Recenzija.findAll()));
recRouter.get('/:id', async (req, res) => res.json(await Recenzija.findByPk(req.params.id)));
recRouter.post('/', async (req, res) => res.json(await Recenzija.create(req.body)));
recRouter.put('/:id', async (req, res) => {
  await Recenzija.update(req.body, { where: { ID_recenzije: req.params.id } });
  res.json({ message: 'Ažurirano' });
});
recRouter.delete('/:id', async (req, res) => {
  await Recenzija.destroy({ where: { ID_recenzije: req.params.id } });
  res.json({ message: 'Obrisano' });
});

module.exports = recRouter;
