const express = require('express')
const { contacts: ctrl } = require('../../../controllers');
const { isValidId } = require('../../../middlewares');
const { validateBody } = require('../../../utils');
const schemas  = require('../../../models');

const router = express.Router()


router.get("/", ctrl.listContacts)


router.get("/:contactId", isValidId, ctrl.getContactById)


router.post("/",
    validateBody(schemas.addShema), ctrl.addContact),


    router.put("/:contactId", isValidId,
        validateBody(schemas.addShema),
        ctrl.updateContact)


router.patch("/:contactId/favorite", isValidId,
    validateBody(schemas.updateSchemaContact),
    ctrl.removeContact)

router.delete("/:contactId", isValidId, ctrl.removeContact);

module.exports = router
