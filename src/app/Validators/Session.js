const Joi = require('joi')

module.exports = {
  body: {
    email: Joi.string().email().required(),
    description: Joi.string().required()

  }
}
