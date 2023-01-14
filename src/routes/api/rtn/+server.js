import { json } from '@sveltejs/kit';
 
export async function POST({ request }) {
  const { name, address} = await request.json();
  let friend
  if (name.startsWith('M')) {
    friend = {name: "Carrie"}
  } else {
    friend = {name: "Seth"}
  }

  let _name =  name.toUpperCase()
  let _address =  address.toUpperCase()

  
  return json({_name, _address, friend});
}