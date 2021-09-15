const express = require("express");
const router = express.Router();

router.use(require("./flow/001/flow001"))
router.use(require("./flow/002/flow002"))
router.use(require("./flow/testflow/testflow"))

module.exports = router;

