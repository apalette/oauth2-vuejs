import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import AuthLayout from '../layouts/Auth';
import LoginView from '../views/Login';

Vue.use(VueRouter);
Vue.use(Vuex);

/**
 * Router
 */
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

/**
 * Store
 * @todo : retrieve token from cookie
 */
const store = new Vuex.Store({
	state : {
		api : {
			url : 'http://localhost:8888/codeuz/laravel-endpoint/backend/public/api/',
	    	authToken: null
	  	}
	},
  	mutations: {
    	addToken: function(state, token){
            state.api.authToken = token;
        },
        removeToken: function(state){
            state.api.authToken = null;
        }
  	}
});

const app = new Vue({
	router: router,
    store
}).$mount('#app');