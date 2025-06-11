const Sport = require('../models/Sport');
const sportRouter = require('express').Router();

sportRouter.get('/', async (req, res) => res.json(await Sport.findAll()));
sportRouter.get('/:id', async (req, res) => res.json(await Sport.findByPk(req.params.id)));
sportRouter.post('/', async (req, res) => res.json(await Sport.create(req.body)));
sportRouter.put('/:id', async (req, res) => {
  await Sport.update(req.body, { where: { ID_sporta: req.params.id } });
  res.json({ message: 'Ažurirano' });
});
sportRouter.delete('/:id', async (req, res) => {
  await Sport.destroy({ where: { ID_sporta: req.params.id } });
  res.json({ message: 'Obrisano' });
});

module.exports = sportRouter;
