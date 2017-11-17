<template>
	<div class="card-body">
		<h4 class="card-title">Login</h4>
	    <form v-on:submit.prevent="loginOnSubmit">
		    <div class="form-group">
		    	<label for="email" v-model="email">Email</label>
		    	<input type="email" name="email" id="email" class="form-control" />
		    </div>
		    <div class="form-group">
		    	<label for="password" v-model="password">Password</label>
		    	<input type="password" name="password" id="password" class="form-control" />
		    </div>
		    <div class="checkbox">
                <label>
                    <input type="checkbox" name="remember"> Remember me
                </label>
            </div>
            <div class="text-right">
		    	<button class="btn btn-primary">Send</button>
		    </div>
	    </form>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	methods : {
		loginOnSubmit : function(e) {
			axios.post(this.$store.state.api.url + 'login', {
				email : e.target.email.value,
				password : e.target.password.value,
			}).then(response => {
      			console.log(response.data.token);
      			this.$store.commit('addToken', response.data.token);
      			console.log(this.$store.state.api.authToken);
      			//his.$store.dispatch('login', {username: this.username, ppassword: password});
      			//this.posts = response.data
    		})
    		.catch(e => {
      			//this.errors.push(e)
      			alert('ko');
    		});
		}
	}
}
</script>