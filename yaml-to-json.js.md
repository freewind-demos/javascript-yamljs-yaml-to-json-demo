```
$ node yaml-to-json.js
```

输出：

```
-------------- parsed yaml object -------------
{ name: 'YAML & JSON',
  keywords: [ 'JavaScript', 'YamlJS', { formats: [Array] } ] }
-------------- converted JSON --------------
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
```