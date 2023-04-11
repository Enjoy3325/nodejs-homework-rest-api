// Тут треба описувати всі маршрути які стосуються авторизації, логінізації, та інше
const express = require('express');
const { validateBody } = require('../../utils');
const { schemas } = require('../../models/user');
const ctrl = require('../../controllers/auth');
// Створюємо роутер в який ми будемо записувати маршрути
const router = express.Router()

router.post('/users/register', validateBody(schemas.registerSchema),ctrl.registerUser)

module.exports = router;