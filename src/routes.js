const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controllers')
const Validators = require('./app/Validators')

routes.post('/users', validate(Validators.User), handle(controllers.UserController.store))
routes.post('/sessions', validate(Validators.Session), handle(controllers.SessionController.store))

routes.use(authMiddleware)

/* Rotas ADS */
routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post('/ads', validate(Validators.Ad), handle(controllers.AdController.store))
routes.put('/ads/:', validate(Validators.Ad), handle(controllers.AdController.update))
routes.delete('/ads/:id', handle(controllers.AdController.destroy))

/* Purchase */

routes.post('/purchases', validate(Validators.Purchase), handle(controllers.PurchaseController.store))


module.exports = routes
