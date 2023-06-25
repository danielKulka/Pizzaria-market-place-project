const router = require("express").Router();
const auttController = require("../controller/auth.controller");

router.post("/login", auttController.loginController);

module.exports = router;