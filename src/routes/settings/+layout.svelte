<script>
  export let data;
  console.log(data)
</script>

<h1>Settings</h1>

<div class="submenu">
  {#each data.sections as section}
    <p><a href="/settings/{section.slug}">{section.title}</a></p>
  {/each}
</div>

<slot></slot>