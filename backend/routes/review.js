const Review = require("../models/Review");

const router = require("express").Router();

//CREATE
//verificata
router.post("/", async (req, res) => {
  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();
    res.status(200).json(savedReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
//verificata
router.put("/:id", async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
//verificata
router.delete("/:id", async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json("Review has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER REVIEWS
//verificata
router.get("/find/:userId", async (req, res) => {
  try {
    const orders = await Review.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
//verificata
router.get("/", async (req, res) => {
  try {
    const orders = await Review.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
