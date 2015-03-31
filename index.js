/**
 * bd-app-structure - index.js
 * @mdemo
 */

'use strict';

var koa = require('koa');

var app = koa();

var server = app.listen(3000, function(){
  console.log(server.address().port)
});

