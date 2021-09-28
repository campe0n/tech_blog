const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/signin", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res.status(400).json({ message: "Incorrect email or password." });
      return;
    }

    const validPassword = await userData.checkPasssword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password" });
      return;
    }

    req.session.save(() => {
      if (!req.session.loggedIn) {
        req.session.loggedIn = true;
        req.session.username = userData.username;
      }

      res.status(200).json({
        user: userData,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
        message: "You are logged in!",
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
