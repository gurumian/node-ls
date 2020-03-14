
You may need to install `typescript`
```
npm i -g typescript
```


## Install
```bash
npm i llr
```

## Example

```js
import ls from '../lib/ls'

let testPath = '~'
ls({
  path: testPath, 
  callback: (path: string)=> {
    console.log(`${testPath}${path}`)
  }
})
```
