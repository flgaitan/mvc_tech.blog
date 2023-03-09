const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/',require('./homeRoutes'));
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route! Try again</h1>")
});

module.exports = router;