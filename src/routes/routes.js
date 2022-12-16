const router = require('express').Router()
const ClientsController = require('../controllers/clients')

router.get('/clients/:id?', ClientsController.get)
router.post('/clients', ClientsController.post)
router.put('/clients/:id', ClientsController.put)
router.delete('/clients/:id', ClientsController.del)

module.exports = router