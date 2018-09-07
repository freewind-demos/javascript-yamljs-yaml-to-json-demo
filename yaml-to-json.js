const YAML = require('yamljs')

const yamlObj = YAML.load('hello-yaml.yaml')
console.log('-------------- parsed yaml object -------------')
console.log(yamlObj)

const json = JSON.stringify(yamlObj, null, 2)
console.log('-------------- converted JSON --------------')
console.log(json)
