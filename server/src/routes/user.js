const router = require("express").Router();
const UserModel = require("../models/user.model");
const CryptoJS = require("crypto-js");
const { verifyToken } = require("../middlewares/auth");

// update
router.put("/:id", verifyToken, async (req, res) => {
  try {
    if (req.user && (req.user.id === req.params.id || req.user.isAdmin)) {
      if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          secretKeyHash
        ).toString();
      }

      const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      return res.status(200).json(updatedUser);
    } else {
      return res.status(403).json("You can update only your account!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// delete
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    if (req.user && (req.user.id === req.params.id || req.user.isAdmin)) {
      await UserModel.findByIdAndDelete(req.params.id);

      return res.status(200).json("User has been deleted !");
    } else {
      return res.status(403).json("You can delete only your account!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get
router.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...info } = user._doc;
    return res.status(200).json(info);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get all users
router.get("/", verifyToken, async (req, res) => {
  try {
    const query = req.query.new;
    if (req.user && req.user.isAdmin) {
      const users = query
        ? await UserModel.find().limit(10).sort({ _id: -1 })
        : await UserModel.find();

      return res.status(200).json(users);
    } else {
      return res.status(403).json("You can not allow to see all user!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get user stats
router.get("/stats", async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await UserModel.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
