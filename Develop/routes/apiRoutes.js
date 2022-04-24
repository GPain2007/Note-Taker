const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.send("API GET Route hit");
});

router.post("/notes", (req, res) => {
  res.send("API POST Route hit");
});

router.put("/notes", (req, res) => {
  res.send("API PUT Route hit");
});

router.delete("/notes", (req, res) => {
  res.send("API DELETE Route hit");
});

module.exports = router;
