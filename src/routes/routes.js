const router = require('express').Router()
const ClientsController = require('../controllers/clients')
const ProductsController = require('../controllers/products')

//Clients
router.get('/clients/:id?', ClientsController.get)
router.post('/clients', ClientsController.post)
router.put('/clients/:id', ClientsController.put)
router.delete('/clients/:id', ClientsController.del)

//Products
router.get('/products/:id?',ProductsController.get)
//router.post('/clients', ClientsController.post)
//router.put('/clients/:id', ClientsController.put)
//router.delete('/clients/:id', ClientsController.del)

module.exports = router