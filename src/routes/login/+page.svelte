<script>
  import { enhance } from '$app/forms';

  export let form;
</script>

{#if form?.success}
  <p>Successfully logged in! Welcome back, {form.name}</p>
{/if}



<form method="POST" use:enhance>
  <p><label>
    Name:
    <input name="name" type="name">
  </label></p> 
  <p><label>
    Email:
    <input name="email" type="email">
  </label></p> 
  <p> <label>
    Address
    <input name="address" type="address">
  </label></p>
  <button>Log in</button>
</form>

{#if form?.missing}<p class="error">The address field is required</p>{/if}
	
<p>{form?.name ? form.name : ''}</p>
<p>{form?.email ? form.email : ''}</p>
<p>{form?.address ? form.address : ''}</p> 
<p>{form?.friend ? form.friend : ''}</p> 
<p>{form?.user ? form.user : ''}</p> 

<style>

  .error {
    color: red;
  }
</style>