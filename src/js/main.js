import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthLayout from '../layouts/Auth';
import LoginView from '../views/Login';

Vue.use(VueRouter);

const routes = [
	{ 
		path: '/',
      	component: AuthLayout,
      	children : [{
      		path: '', 
      		component : LoginView
      	}]
    },
	{ 
		path: '/auth/',
      	component: AuthLayout,
      	children : [{
      		path: 'login', 
      		component : LoginView
      	}]
    }
];
const router = new VueRouter({
	mode: 'history',
	routes : routes,
	base : '/codeuz/laravel-endpoint/front/' // custom
});

const app = new Vue({router}).$mount('#app');