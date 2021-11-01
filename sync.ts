import glob from 'glob'
import { readFileSync } from 'fs'
import { request } from 'https'

const key = process.env.SCREEPS_API_KEY

const paths = glob.sync('build/*.js')
const cleanName = (name: string) => name.replace(/^build\//, '').replace(/\.js$/, '')

const modules: Record<string, string> = {}
for (const path of paths) {
  modules[cleanName(path)] = readFileSync(path).toString()
}

const req = request({
  hostname: 'screeps.com',
  port: 443,
  path: '/api/user/code',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Token': key,
  },
})

req.write(JSON.stringify({ branch: 'typedHive', modules }))
req.end(console.log)
