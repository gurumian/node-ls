import fs = require('fs')

export function _ls(arg: {path: string; callback: (path: string) => void;}) {
  fs.readdir(arg.path, { encoding: 'utf-8' }, (err, files) => {
    if(err) {
      console.error(err)
      return
    }

    files.map((file) => {
      let absolutePath = `${arg.path}/${file}`
      fs.stat(absolutePath, (err, stats) => {
        if(err) {
          console.error(err)
          return
        }

        if(stats.isDirectory()) {
          _ls({
            path: absolutePath,
            callback: arg.callback,
          })
        }
        else {
          arg.callback(absolutePath) 
        }
      })
    })
  })
}

export default function ls(arg: {path: string; callback: (path: string) => void;}) {
  console.log(`ls path: ${arg.path}`)
  let dir = arg.path
  _ls({
    path: arg.path,
    callback: (path: string) => {
      let trim = path.substr(dir.length)
      arg.callback(trim)
    }
  })
}