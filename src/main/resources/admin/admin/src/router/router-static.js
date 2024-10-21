import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import baoxiuxinxi from '@/views/modules/baoxiuxinxi/list'
    import aboutus from '@/views/modules/aboutus/list'
    import weixiudingdan from '@/views/modules/weixiudingdan/list'
    import pingjiaxinxi from '@/views/modules/pingjiaxinxi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import discusszhishixinxi from '@/views/modules/discusszhishixinxi/list'
    import weixiuyuan from '@/views/modules/weixiuyuan/list'
    import zhishifenlei from '@/views/modules/zhishifenlei/list'
    import weixiujindu from '@/views/modules/weixiujindu/list'
    import systemintro from '@/views/modules/systemintro/list'
    import sushefenpei from '@/views/modules/sushefenpei/list'
    import zhishixinxi from '@/views/modules/zhishixinxi/list'
    import sushexinxi from '@/views/modules/sushexinxi/list'
    import messages from '@/views/modules/messages/list'
    import config from '@/views/modules/config/list'
    import loudongxinxi from '@/views/modules/loudongxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/baoxiuxinxi',
        name: '报修信息',
        component: baoxiuxinxi
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/weixiudingdan',
        name: '维修订单',
        component: weixiudingdan
      }
      ,{
	path: '/pingjiaxinxi',
        name: '评价信息',
        component: pingjiaxinxi
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/discusszhishixinxi',
        name: '知识信息评论',
        component: discusszhishixinxi
      }
      ,{
	path: '/weixiuyuan',
        name: '维修员',
        component: weixiuyuan
      }
      ,{
	path: '/zhishifenlei',
        name: '知识分类',
        component: zhishifenlei
      }
      ,{
	path: '/weixiujindu',
        name: '维修进度',
        component: weixiujindu
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/sushefenpei',
        name: '宿舍分配',
        component: sushefenpei
      }
      ,{
	path: '/zhishixinxi',
        name: '知识信息',
        component: zhishixinxi
      }
      ,{
	path: '/sushexinxi',
        name: '宿舍信息',
        component: sushexinxi
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/loudongxinxi',
        name: '楼栋信息',
        component: loudongxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
