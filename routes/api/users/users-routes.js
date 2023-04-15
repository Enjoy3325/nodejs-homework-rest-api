// Тут треба описувати всі маршрути які стосуються авторизації, логінізації, та інше
const express = require('express');
const { users: ctrl }  = require('../../../controllers');
const { validateBody }  = require('../../../utils');
const schemas   = require('../../../models');
// Створюємо роутер в який ми будемо записувати маршрути
const router = express.Router()

router.post('/register',
    validateBody(schemas.registerSchema), ctrl.registerUser)

    router.post('/login', validateBody(schemas.loginSchema), ctrl.loginUser)
module.exports = router;