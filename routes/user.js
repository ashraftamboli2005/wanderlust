const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");

const userController = require("../controllers/users");
const { saveRedirectUrl } = require("../middleware.js");

// SIGNUP ROUTES
router
  .route("/signup")
  .get(userController.renderSignup)
  .post(wrapAsync(userController.signup));

// LOGIN ROUTES
router
  .route("/login")
  .get(userController.renderLogin)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

// LOGOUT
router.get("/logout", userController.logout);

module.exports = router;
