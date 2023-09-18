const router = require("express").Router();

const goalController = require("../controllers/goalController");

// Routes
router.route("/goals").post((req, res) => goalController.create(req, res));
router.route("/goals").get((req, res) => goalController.getAll(req, res));
router.route("/goals/:id").get((req, res) => goalController.get(req, res));
router.route("/goals/:id").delete((req, res) => goalController.delete(req, res));
router.route("/goals/:id").put((req, res) => goalController.update(req, res));

module.exports = router;
