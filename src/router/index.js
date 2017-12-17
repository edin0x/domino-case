import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index';
import USA from '@/components/countries/usa';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/usa', name: 'usa', component: USA },
    { path: '/usa/state/:stateAbbr', name: 'usa', component: USA }
  ],
});
