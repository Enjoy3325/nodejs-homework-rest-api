const express = require('express')
const { validateBody } = require('../../utils');
const { isValidId, authenticate } = require("../../middlewares");
const {contacts: ctrl} = require('../../controllers');
const { schemas }  = require('../../models/contact');

const router = express.Router();


router.get('/',authenticate, ctrl.listContacts)


router.get('/:contactId',authenticate, isValidId, ctrl.getContactById)


router.post('/',authenticate,
    validateBody(schemas.addShema),
    ctrl.addContact)

router.put("/:contactId",authenticate, isValidId,
    validateBody(schemas.addShema),
    ctrl.updateContact)


router.patch("/:contactId/favorite", authenticate, isValidId,
    validateBody(schemas.updateSchemaContact),
    ctrl.updateStatusContact);


router.delete('/:contactId',authenticate, isValidId, ctrl.removeContact)


module.exports = router;
