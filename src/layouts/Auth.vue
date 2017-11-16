<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand">My app</a>
		</nav>
		<div class="container" id="container">
			<div class="row">
	  			<div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
	  				<div class="text-center">
	  					<router-link to="/">Home</router-link>
						<router-link to="/auth/login">Login</router-link>
	  				</div>
	  				<hr/>
			  		<div class="card">
			  			<div id="view">
							<router-view></router-view>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>