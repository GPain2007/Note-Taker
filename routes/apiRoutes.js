const router = require("express").Router();
const store = require("../db/Store");
// const express = require("express");
// const res = require("express/lib/response");

router.get("/", (req, res) => {
  store.read().then((notes) => {
    return res.json(notes);
  });
});

router.get("/notes", (req, res) => {
  store
    .read()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => console.log(err));
});

router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => console.error(err));
});

router.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ message: `${req.params.id} note was  deleted` }))
    .catch((err) => console.error(err));
});
// const db = {};
// db.db = require("../db/db.json");

// router.get("/notes", (req, res) => {
//   res.json(db.db);
// });

// router.post("/notes", (req, res) => {
//   fs.readFile("db/db.json", "utf8", (err, data) => {
//     //find data
//     // console.log(typeof data);
//     const existingData = JSON.parse(data);
//     console.log(typeof existingData);
//     const notes = [];
//     const note = { title: req.body.title, text: req.body.text };
//     notes.push(existingData);
//     notes.push(note);

//     fs.writeFile("db/db.json", JSON.stringify(notes), (err) => {
//       if (err) {
//         console.log(err);
//       } else console.log("wrote run json");
//     });
//   });
// });

// // });

// router.delete((req, res) => {
//   res.json({ id: req.body.id });
// });

module.exports = router;
