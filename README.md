
You may need to install `typescript`
```
npm i -g typescript
```


## Install
```bash
npm i llr
```
globally,
```bash
npm i -g llr
```

## Run
```bash
llr
```


## Example

```js
const {ls} = require('llr')

let testPath = '.'
ls({
  path: testPath, 
  callback: (path)=> {
    console.log(`${testPath}${path}`)
  }
})
```
