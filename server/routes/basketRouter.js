const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");

router.post("/", basketController.addDevice);
router.get("/");
router.delete("/");
router.delete("/:id");

module.exports = router;
