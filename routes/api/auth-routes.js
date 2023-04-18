const  express  = require('express');
const { validateBody } = require('../../utils');
const { authenticate } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
const {schemas} =require('../../models/user');

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrl.registerUser
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrl.loginUser
);

router.get("/current", authenticate, ctrl.getCurrentUser);

router.post("/logout", authenticate, ctrl.logoutUser);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubSchema),
ctrl.updateSubUser
);


module.exports =  router;