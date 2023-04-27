const express = require('express');
const { validateBody } = require('../../utils');
const { authenticate, upload } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
const { schemas } = require('../../models/user');

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrl.registerUser
);

router.get("/verify/:verificationToken", ctrl.verifyEmail),
router.post("/verify",validateBody(schemas.emailSchema),ctrl.resendVerifyEmail)
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

router.patch("/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar)


module.exports = router;