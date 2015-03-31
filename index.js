/**
 * bd-app-structure - index.js
 * @mdemo
 */

'use strict';

var koa = require('koa');

var router = router();

var app = koa();

//auto-load middleware

var app1 =  router('app1');
var app2 =  router('app2');

// auto-load app1 middleware
// auto-load app1 routes
// auto-load app1 static
// auto-load app1 other

var server = app.listen(3000, function(){
  console.log(server.address().port)
});

