const router = require("express").Router();
const MovieModel = require("../models/movie.model");
const { verifyToken } = require("../middlewares/auth");

// create
router.post("/", verifyToken, async (req, res) => {
  try {
    if (req.user && req.user.isAdmin) {
      const newMovie = await new MovieModel(req.body);

      const savedMovie = await newMovie.save();
      return res.status(200).json(savedMovie);
    } else {
      return res.status(403).json("You can allow to access this resources!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// update
router.put("/:id", verifyToken, async (req, res) => {
  try {
    if (req.user && req.user.isAdmin) {
      const updatedMovie = await new MovieModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      return res.status(200).json(updatedMovie);
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
      await MovieModel.findByIdAndDelete(req.params.id);

      return res.status(200).json("The movie has been deleted");
    } else {
      return res.status(403).json("You can allow to access this resources!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get
router.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    return res.status(200).json(movie);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get random movies
router.get("/random", verifyToken, async (req, res) => {
  try {
    const type = req.query.type;
    let movie = [];

    if (type === "series") {
      movie = await MovieModel.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await MovieModel.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }

    return res.status(200).json(movie);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get all
router.get("/", verifyToken, async (req, res) => {
  try {
    if (req.user && req.user.isAdmin) {
      let movies = await MovieModel.find();
      res.status(200).json(movies);
    } else {
      return res.status(403).json("You can allow to access this resources!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
