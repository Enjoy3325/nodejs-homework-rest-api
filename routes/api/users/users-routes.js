// Тут треба описувати всі маршрути які стосуються авторизації, логінізації, та інше
const express = require('express');
const  ctrl  = require('../../../controllers');
const { validateBody } = require('../../../utils');
const  schemas  = require('../../../models');
// Створюємо роутер в який ми будемо записувати маршрути
const router = express.Router()

router.post('/users/register',
    validateBody(schemas.user.registerSchema), ctrl.users.registerUser)

module.exports = router;