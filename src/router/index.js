import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About'),
    meta: {
      title: '关于',
    },
  },
  {
    path: '/error/404',
    name: 'Page404',
    component: () => import(/* webpackChunkName: "page404" */ '../views/Error/Page404'),
    meta: {
      title: '404',
    },
  },
  // 重定向 404 需放到路由列表最后
  {
    path: '*',
    redirect: '/error/404',
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  const { meta } = to;
  const { title } = meta || {};
  if (title) document.title = title;
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
