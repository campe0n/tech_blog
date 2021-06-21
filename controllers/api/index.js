const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/login', loginRoutes);

module.exports = router;