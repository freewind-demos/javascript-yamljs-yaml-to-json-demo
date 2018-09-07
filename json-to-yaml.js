const YAML = require('yamljs')
const fs = require('fs')

const jsonStr = fs.readFileSync('hello-json.json', 'utf-8')
console.log('--------------- JSON str ------------------')
console.log(jsonStr)

const jsonObj = JSON.parse(jsonStr)
console.log('--------------- JSON obj -------------------')
console.log(jsonObj)

const yaml = YAML.dump(jsonObj)
console.log('------------- converted YAML --------------')
console.log(yaml)