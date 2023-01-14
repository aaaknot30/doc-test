<script>
  export let data;
</script>


<h1>Accounts</h1>
{#if data.user}
<p>User is:  {data.user}</p>
{:else}
<p>User has logged out</p>
{/if}