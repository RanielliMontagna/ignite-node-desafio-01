import fs from 'node:fs'
import { parse } from 'csv-parse'

const csvPath = new URL('./tasks.csv', import.meta.url)

const stream = fs.createReadStream(csvPath)

const csvParse = parse({
  delimiter: ',',
  skipEmptyLines: true,
  fromLine: 2,
})

async function run() {
  const linesParse = stream.pipe(csvParse)

  for await (const line of linesParse) {
    const [title, description] = line

    const apiUrl = 'http://localhost:3333'

    await fetch(`${apiUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })

    function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    await wait(1000)
  }
}

run()
