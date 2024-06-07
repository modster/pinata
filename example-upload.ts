import FormData from 'https://esm.sh/form-data@4.0.0'
import fs from 'node:fs'
import { load } from 'https://deno.land/std@0.224.0/dotenv/mod.ts'

const env = await load()// 1. env
const jwt = env['PINATA_API_KEY']
const JWT = `Bearer ${jwt}`
const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS'// 2. url
const formData = new FormData()
const src = 'path/to/file.png'// 3. file
const file = fs.createReadStream(src)
formData.append('file', file)
const pinataMetadata = JSON.stringify({
  name: 'File name',// 4. name
})
formData.append('pinataMetadata', pinataMetadata)
formData.append('method', 'POST')
formData.append('maxBodyLength', 'Infinity')
formData.append('headers: {
        'Content-Type': `multipart/form-data; boundary=${formData.boundary
        },
        'Authorization': JWT,
      })

try {
  const resp = await fetch(url, formData)
  console.log(resp.data)
} catch (error) {
  console.log(error)
}

const pinFileToIPFS = async () => {
  try {
    const resp = await fetch(url,
      formData,
      {
        maxBodyLength: 'Infinity',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT,
        },
      }
    )
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

pinFileToIPFS()
