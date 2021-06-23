const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const loginRoutes = require('./loginRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/login', loginRoutes);
router.use('/comment', commentRoutes)

module.exports = router;