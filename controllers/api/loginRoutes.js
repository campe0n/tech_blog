const router = require("express").Router();
const { User } = require("../../models");

router.post("/signin", async (req, res) => {
  console.log("Body: ", req.body);
  console.log("Session: ", req.session);
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
    console.log("Body: ", req.body);
    console.log("Session: ", req.session);
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  console.log("Body: ", req.body);
  console.log("Session: ", req.session);
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

    const validPassword = await userData.checkPasswd(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password" });
      return;
    }

    req.session.save(() => {
      if (!req.session.loggedIn) {
        req.session.loggedIn = true;
        req.session.username = userData.username;
        req.session.user_id = userData.id;
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
