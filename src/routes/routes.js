const router = require('express').Router()
const ClientsController = require('../controllers/clients')
const ProductsController = require('../controllers/products')
const OrdersControllers = require('../controllers/orders')

//Clients
router.get('/clients/:id?', ClientsController.get)
router.post('/clients', ClientsController.post)
router.put('/clients/:id', ClientsController.put)
router.delete('/clients/:id', ClientsController.del)

//Products
router.get('/products/:id?',ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
router.delete('/products/:id', ProductsController.del)

//Orders
router.get('/orders/:id?',OrdersControllers.get)

module.exports = router