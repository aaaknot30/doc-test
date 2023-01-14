export async function handle({ event, resolve }) {
  console.log('.......................hooks')
  event.locals.user = 'aa3aa3dff5ff';
  return resolve(event);
}