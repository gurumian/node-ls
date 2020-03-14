
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

ls({
  path: args[0], 
  callback: (path: string)=> {
    console.log(`${args[0]}${path}`)
  }
})
```
