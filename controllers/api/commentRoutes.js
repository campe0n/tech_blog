const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.comment,
      date_created: req.body.date_created,
      post_id: req.body.post_id,
      user_id: req.body.user_id,
    });
    console.log("Req. Body:", req.body);

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/newComment", async (req, res) => {
  try {
    res.render("comment");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/");
module.exports = router;
