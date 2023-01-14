<script>
  import { page } from '$app/stores';
</script>
<h1>Heeeeellllooooooo</h1>
<h2>{$page.status}: {$page.error.message}</h2>

<style>
h1, h2 {
  color: purple;
  text-shadow: 3px 3px 3px orange;
}

</style>