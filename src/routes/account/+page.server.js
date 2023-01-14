import { redirect } from '@sveltejs/kit';

export function load(event) {
  console.log('accounts...........')
  return {
    user: event.locals.user
  };
}
 
export const actions = {
  logout: async (event) => {
    console.log('accounts........form.........')
    event.cookies.delete('sessionid');
    event.locals.user = null;
  }
};