const router = require("express").Router();

// Goals router
const goalsRouter = require("./goals");

router.use("/", goalsRouter);

module.exports = router;