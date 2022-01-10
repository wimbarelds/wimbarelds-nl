import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AboutMe from '../views/AboutMe.vue';
import { metaDataNavHook } from './navhook';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'AboutMe',
    meta: {
      title: 'Wim Barelds.nl - About me',
    },
    component: AboutMe,
  },
  {
    path: '/read/:path',
    name: 'Article',
    component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(metaDataNavHook);

export { router };
