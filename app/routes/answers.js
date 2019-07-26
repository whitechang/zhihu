const Router = require('koa-router');
const jwt = require('koa-jwt');
const { secret } = require('../config');
const router = new Router({ prefix: '/questions/:questionId/answers' });
const { find, findById, create, update, delete: del, checkAnswerer, checkAnswerExist } = require('../controllers/answers');

const auth = jwt({ secret });

router.get('/', find);

router.get('/:id', checkAnswerExist, findById);

router.post('/', auth, create);

router.patch('/:id', auth, checkAnswerExist, checkAnswerer, update);

router.delete('/:id', auth, checkAnswerExist, checkAnswerer, del);

module.exports = router;