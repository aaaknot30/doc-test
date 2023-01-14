import { json } from '@sveltejs/kit';


export async function POST(event) {
  const body = await event.request.formData();
 
  // log all fields
  console.log(body);

  return json({
    // get a specific field's value
    name: body.get('name') ?? 'world',
    address: body.get('address') ?? 'cody'
  });
}