#!/usr/bin/env node

'use strict'

import ls from '../lib/ls'

var args = process.argv.slice(2);
console.log('args: ', args);

ls({
  path: args[0], 
  callback: (path: string)=> {
    console.log(`${args[0]}${path}`)
  }
})