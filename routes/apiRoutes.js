const router = require("express").Router();

router.get("/notes", (req, res) => {
  const result = getNoteById(req.params.title, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
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
