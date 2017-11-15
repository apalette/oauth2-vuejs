import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginVue from '../views/Login';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
	{ path: '/', component: LoginVue},
	{ path: '/login', component: LoginVue },
	{ path: '/bar', component: Bar }
];
const router = new VueRouter({
	mode: 'history',
	routes : routes,
	base : '/codeuz/laravel-endpoint/front/' // custom
});

const app = new Vue({
	router
}).$mount('#app');
