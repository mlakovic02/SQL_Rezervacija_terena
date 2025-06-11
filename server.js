const express = require('express');
const app = express();
const sequelize = require('./config/db');
const terenRoutes = require('./routes/teren');
const sportRoutes = require('./routes/sport');
const recRoutes = require('./routes/recenzija');
const rezRoutes = require('./routes/rezervacija');

app.use(express.json());
app.use('/teren', terenRoutes);
app.use('/sport', sportRoutes);
app.use('/recenzija', recRoutes);
app.use('/rezervacija', rezRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Povezan s bazom.');
    return sequelize.sync(); // 👈 dodano ovo
  })
  .then(() => {
    console.log('Modeli sinkronizirani.');
  })
  .catch(err => {
    console.error('Greška u vezi:', err);
  });


app.listen(3000, () => console.log('Server pokrenut na portu 3000'));
