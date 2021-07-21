const express = require("express");
const Music = require("../controller/MusicController");
const router = express.Router();

router.post("/music", Music.add);
router.put("/music/:id", Music.edit);
router.get("/music", Music.getAll);
router.get("/music/:id", Music.getById);
router.delete("/music/:id", Music.remove);

module.exports = router;
