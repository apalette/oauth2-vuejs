import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
	{ path: '/', component: Foo},
	{ path: '/foo', component: Foo },
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
