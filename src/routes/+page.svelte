<script>
  import { enhance } from '$app/forms';

  export let data;
  
</script>


<h1>Doc Test</h1>
<h1>Hello and welcome to my site!</h1>
<a href="/about">About my site</a>
<p><a href="/blog/hello-world">/blog/hello-world</a></p>
<p><a href="/blog/jello-world">/blog/jello-world</a></p>
<p><a href="/api/random-number">/api/random-number</a></p>
<p><a href="/add">/add</a></p>
<p><a href="/rtn">/rtn</a></p>
<p><a href="/login">/login</a></p>
<p><a href="/account">/account</a></p>
<form method="POST" action="/account?/logout">
  <p><button type="submit">Log out</button></p>
</form>

<p><a href="/what-is-my-user-agent">what-is-my-user-agent</a></p>
<form method="POST" action="/hello" use:enhance>
<p><input type="text" name="name" placeholder="Add Name"></p>
<p><input type="text" name="address" placeholder="Add address"></p>
<p><button type="submit">Submit</button></p>
</form>



<p>{data.title}</p>
<p>{data.content}</p>