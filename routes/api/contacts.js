const express = require('express')
const Joi = require('joi');

const contacts = require('../../models/contacts')
const { HttpError } = require('../../helpers');

const router = express.Router()


const addShema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" is required`,
    "string.empty": `"name" cannot be empty`,
    "string.base": `"name" must be string`
  }),
  email: Joi.string().required().messages({
    "any.required": `"email" is required`,
    "string.empty": `"email" cannot be empty`,
    "string.base": `"email" must be string`
  }),
  phone: Joi.number().required().messages({
    "any.required": `"phone" is required`,
    "number.empty": `"phone" cannot be empty`,
    "number.base": `"phone" must be number`
  }),
  phone: Joi.binary().min(6),
  phone: Joi.binary().max(16)
})



router.get('/', async (req, res, next) => {
  try {
    const result = await contacts.listContacts()
    res.json(result)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId)
    if (!result) {
      throw HttpError(404, `Contact with ${contactId} not found!`);
    }
    res.json(result)
  }
  catch (error) {
    next(error)
  }

})

router.post('/', async (req, res, next) => {
  try {
    const { error } = addShema.validate(req.body)

    if (error) {
      throw HttpError(400, error.message)
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
  }
  catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId)
    if (!result) {
      throw HttpError(404, `Contact with ${contactId} not found!`);
    }
    res.json({
      message: "Contact deleted"
    })
  }
  catch (error) {
    next(error)
  }
})

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = addShema.validate(req.body)
    if (error) {
      throw HttpError(400, error.message)
    }
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body)
    console.log(result);
    if (!result) {
      throw HttpError(404, `Contact with ${contactId} not found!`);
    }
    res.json(result)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
