<script>
  let name = '';
  let address = '';
  let data = '';

  async function rtn() {
    const response = await fetch('/api/rtn', {
      method: 'POST',
      body: JSON.stringify({ name, address }),
      headers: {
        'content-type': 'application/json'
      }
    });

    data = await response.json();
  }
</script>

<p>Name: <input type="text" bind:value={name}></p>
<p>Address: <input type="text" bind:value={address}></p>
<p>{data._name ? data._name : ''}</p>
<p>{data._address ? data._address : ''}</p>
<p>{data ? data.friend.name : ''}</p>

<button on:click={rtn}>Calculate</button>