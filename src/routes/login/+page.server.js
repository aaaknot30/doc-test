
import { fail } from '@sveltejs/kit';


export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const address = data.get('address');
    const friend = email.startsWith('m') ? "Sam" : "Ted"
    const user = 'j3hskd90jnc76'
    cookies.set('sessionid', user);

    if (!address) {
			return fail(400, { address, missing: true });
		}
 
    return { 
        success: true, 
        name: name,
        email: email,
        address: address,
        friend: friend,
        user: user
      };
  }
};