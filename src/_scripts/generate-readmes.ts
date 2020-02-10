import fs from 'fs'
import path from 'path'
import { packages } from '../utils'

const readmeFiles = fs.createWriteStream('./src/readmes.ts')

readmeFiles.write('const readmes: Map<string,string> = new Map()\n')

packages.map(pkg => {
  const file = path.join(__dirname, '../..', 'node_modules/@mithril-icons', pkg.raw) + '/README.md'
  const readme = fs.readFileSync(file, { encoding: 'utf-8' })
  // readmeFiles.write(`export const ${pkg.identifier}: string = ${JSON.stringify(readme)}\n`)
  readmeFiles.write(`readmes.set('${pkg.raw}', ${JSON.stringify(readme)})\n`)
})

const readme = fs.readFileSync(path.join(__dirname, '../..', 'README.md'), { encoding: 'utf-8' })
// readmeFiles.write(`export const builder: string = ${JSON.stringify(readme)}\n`)
readmeFiles.write(`readmes.set('builder', ${JSON.stringify(readme)})\n`)

readmeFiles.write('export { readmes }\n')

readmeFiles.close()
