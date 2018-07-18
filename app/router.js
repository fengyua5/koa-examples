
const router = require('koa-router')();
const UserController = require('./controller/user');

router.prefix('/api');

router
  .get('/users/list',UserController.list);



module.exports = router;