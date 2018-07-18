
class IndexController {
  static async list (ctx){
    // const user = ctx.session.user || {};
    // if(!user) return ctx.error({ msg: '你还没有登录哦!' });
    //
    // const { name, _id } = user;
    const data = ctx.query;

    console.log('------', data);

    return ctx.success({ msg:'发表成功!',data:{code: 1}});
  }
}

module.exports = IndexController;


