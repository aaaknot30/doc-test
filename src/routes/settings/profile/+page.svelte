
<script>
  export let data;

  console.log(data.sections); // [{ slug: 'profile', title: 'Profile' }, ...]
</script>

<h1>Profile</h1>

{#each data.sections as section}
<h3>{section.title}</h3>
{/each}
