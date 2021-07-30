const express = require('express');

const routes = express.Router();

const { list, create, getOne, edit, delet } = require('../controllers/boardgame_controller');
const { listFav, createFav, deletFav } = require('../controllers/favorites_controller');


//Boardgame routes

routes.get('/boardgame', list);
routes.post('/boardgame', create);
routes.get('/boardgame/:id', getOne);
routes.put('/boardgame/:id', edit);
routes.delete('/boardgame/:id', delet);

//Favorites routes

routes.get('/favorites/', listFav);
routes.post('/favorites/', createFav);
routes.delete('/favorites/:id', deletFav);





module.exports = routes;