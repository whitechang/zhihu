const Router = require('koa-router');
const jwt = require('koa-jwt');
const { secret } = require('../config');
const router = new Router({ prefix: '/users' });
const { find, findById, create, update, delUser, login, listFollowing, listFollowers, checkUserExist, follow, unfollow,
    listFollowingTopics, followTopics, unfollowTopics, listQuestions,
    listLikingAnswers, likeAnswer, unlikeAnswer, listdisLikingAnswers, dislikeAnswer, undislikeAnswer,
    listcollectingAnswers, collectAnswer, uncollectAnswer } = require('../controllers/users');

const { checkTopicExist } = require('../controllers/topics');
const { checkAnswerExist } = require('../controllers/users');
// const auth = async (ctx, next) => {
//     const { authorization = '' } = ctx.request.header;
//     const token = authorization.replace('Bearer ', '');
//     try {
//         const user = jwt.verify(token, secret);
//         ctx.state.user = user;
//     } catch (error) {
//         ctx.throw(401, error.message);
//     }
//     await next();
// }

const auth = jwt({ secret });

router.get('/', find);

router.get('/:id', findById);

router.post('/', create);

router.patch('/:id', auth, update);

router.delete('/:id', auth, delUser);

router.post('/login', login);

router.get('/:id/following', listFollowing);

router.get('/:id/followers', listFollowers);

router.put('/following/:id', auth, checkUserExist, follow);

router.delete('/following/:id', auth, checkUserExist, unfollow);

router.get('/:id/followingTopics', listFollowingTopics);

router.put('/followTopics/:id', auth, checkTopicExist, followTopics);

router.delete('/followTopics/:id', auth, checkTopicExist, unfollowTopics);

router.get('/:id/questions', listQuestions);

router.get('/:id/likingAnswers', listLikingAnswers);

router.put('/likingAnswers/:id', auth, checkAnswerExist, likeAnswer, undislikeAnswer);

router.delete('/likingAnswers/:id', auth, checkAnswerExist, unlikeAnswer);

router.get('/:id/dislikingAnswers', listdisLikingAnswers);

router.put('/dislikingAnswers/:id', auth, checkAnswerExist, dislikeAnswer, unlikeAnswer);

router.delete('/dislikingAnswers/:id', auth, checkAnswerExist, undislikeAnswer);

router.get('/:id/collectingAnswers', listcollectingAnswers);

router.put('/collectingAnswers/:id', auth, checkAnswerExist, collectAnswer);

router.delete('/collectingAnswers/:id', auth, checkAnswerExist, uncollectAnswer);

module.exports = router;