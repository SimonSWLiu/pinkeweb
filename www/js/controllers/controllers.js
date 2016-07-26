//原始文件angular.module('starter.controllers', [])
//修改后如下
define(function (require) {
  'use strict';
  var services = require('services/services');
  var controllers = angular.module('starter.controllers', []);
  //controllers.controller('controller名字',require(对应的文件地址));
  //controllers.controller('ChatDetailCtrl',require('controllers/ChatDetailCtrl'));
  //controllers.controller('AccountCtrl',require('controllers/AccountCtrl'));
  //controllers.controller('ChatsCtrl',require('controllers/ChatsCtrl'));
  //controllers.controller('DashCtrl',require('controllers/DashCtrl'));
  return controllers;
});



