const express = require('express')
const  ctrl  = require('../../../controllers');
const { validateBody } = require('../../../utils');
const  schemas  = require('../../../models');

const router = express.Router()


router.get('/', ctrl.contacts.listContacts)


router.get('/:contactId', ctrl.contacts.getContactById)


router.post('/',
    validateBody(schemas.contact.addShema),
    ctrl.contacts.addContact)


router.put("/:contactId",
    validateBody(schemas.contact.addShema),
    ctrl.contacts.updateContact)


router.patch("/:contactId/favorite",
    validateBody(schemas.contact.updateSchemaContact),
    ctrl.contacts.removeContact)


module.exports = router
