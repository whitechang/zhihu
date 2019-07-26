const Router = require('koa-router');
const router = new Router();
const { index, upload, download } = require('../controllers/home');

router.get('/', index)

router.post('/upload', upload)

router.get('/download', download)

module.exports = router;