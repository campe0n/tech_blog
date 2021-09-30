const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll();

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts, loggedin: req.session.loggedin });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    const post = postData.get({ plain: true });

    res.render("post", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post", async (req, res) => {
  try {
    res.render("post", {
      loggedIn: req.session.loggedIn,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const username = req.session.username;
    const postData = await Post.findAll();

    if (!postData) {
      res.render("dashboard", {
        loggedIn: req.session.loggedIn,
        username: username,
      });
    } else {
      const posts = postData.reverse().map((post) => post.get({ plain: true }));
      res.render("dashboard", {
        posts,
        loggedIn: req.session.loggedIn,
        username: username,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

module.exports = router;
