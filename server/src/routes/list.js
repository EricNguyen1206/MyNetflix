const router = require("express").Router();
const ListModel = require("../models/list.model");
const { verifyToken } = require("../middlewares/auth");

// create
router.post("/", verifyToken, async (req, res) => {
  try {
    if (req.user && req.user.isAdmin) {
      const newList = await new ListModel(req.body);

      const savedList = await newList.save();
      return res.status(200).json(savedList);
    } else {
      return res.status(403).json("You can allow to access this resources!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// delete
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    if (req.user && req.user.isAdmin) {
      await ListModel.findByIdAndDelete(req.params.id);

      return res.status(200).json("The List has been deleted");
    } else {
      return res.status(403).json("You can allow to access this resources!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get  Lists
router.get("/", verifyToken, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await ListModel.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await ListModel.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await ListModel.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
