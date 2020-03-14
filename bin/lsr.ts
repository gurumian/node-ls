#!/usr/bin/env node

'use strict'

import ls from '../lib/ls'

var args = process.argv.slice(2);
var uri = '.'
if(args.length) {
  uri = args[0];
}

ls({
  path: uri, 
  callback: (path: string)=> {
    console.log(`${uri}${path}`)
  }
})