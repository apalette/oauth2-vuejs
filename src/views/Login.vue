<template>
	<div class="card-body">
		<h4 class="card-title">Login</h4>
	    <form>
		    <div class="form-group">
		    	<label for="email">Email</label>
		    	<input type="email" name="email" id="email" class="form-control" />
		    </div>
		    <div class="form-group">
		    	<label for="password">Password</label>
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
export default {
}
</script>