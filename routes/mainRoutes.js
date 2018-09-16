const router = require('express').Router();
const MainController = require('../controllers/mainController.js');

router.get('/env', MainController.getEnvironmentIdList);
router.get('/env/:id', MainController.getEnvironment);
router.post('/env', MainController.postEnvironment);

module.exports.router = router;
