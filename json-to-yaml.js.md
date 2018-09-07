```
$ node json-to-yaml.js
```

输出

```
{
  "name": "YAML & JSON",
  "keywords": [
    "JavaScript",
    "YamlJS",
    {
      "formats": [
        "YAML",
        "JSON"
      ]
    }
  ]
}
--------------- JSON obj -------------------
{ name: 'YAML & JSON',
  keywords: [ 'JavaScript', 'YamlJS', { formats: [Array] } ] }
------------- converted YAML --------------
name: 'YAML & JSON'
keywords:
    - JavaScript
    - YamlJS
    - {formats: [YAML, JSON]}
```