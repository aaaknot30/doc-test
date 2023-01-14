import { json } from '@sveltejs/kit';
 
export function GET(event) {
  // log all headers
  //console.log(...event.request.headers);
  console.log("-------------------------------------------------")
  console.log("REQUEST: ", event.request.credentials);
  console.log("-------------------------------------------------")
 
  return json({
    // retrieve a specific header
    userAgent: event.request.headers.get('user-agent')
  });
}