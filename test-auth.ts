/**
 * @title HTTP Requests
 * @tags cli, deploy, web
 * deno run -A test-auth.ts
 * @resource {https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API} MDN: Fetch API
 * @group Network
 *
 * This example demonstrates how to test auth with an HTTP request to a server.
 */

import { load } from 'https://deno.land/std@0.224.0/dotenv/mod.ts'

const env = await load()
const jwt = env['PINATA_API_KEY']
const url = 'https://api.pinata.cloud/data/testAuthentication'

const options = {
  method: 'GET',
  headers: {
    Authorization: 'Bearer ' + jwt,
    'Content-Type': 'application/json',
  },
}

const resp = await fetch(url, options)

console.log(resp.status) // 200
console.log(resp.headers.get('Content-Type')) // "text/html"
console.log(await resp.text()) // "Hello, World!"
