define([
  'routes/routes',
  'services/services',
  'controllers/controllers'],

  function () {
    'use strict';
    // Ionic Starter App

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    // 'starter.services' is found in services.js
    // 'starter.controllers' is found in controllers.js
    var app = angular.module('starter', ['ionic', 'starter.routes', 'starter.controllers', 'starter.services'])

    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })
    .config(function($stateProvider, $urlRouterProvider, $controllerProvider) {
      app.routes = $stateProvider;
      app.registerController = $controllerProvider.register;
      app.loadControllerJs = function(controllerJs){
        return function($rootScope, $q){
          var def = $q.defer(),
          deps=[];
          angular.isArray(controllerJs)?(deps = controllerJs) : deps.push(controllerJs);
          require(deps,function(){
            $rootScope.$apply(function(){
              def.resolve();
            });
          });
          return def.promise;
        };
      }

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.activities', {
        url: '/activities',
        views: {
          'tab-activities': {
            templateUrl: 'templates/tab-activities.html',
            controller: 'TabActivitiesCtrl',
            resolve:{
              deps: app.loadControllerJs('./controllers/TabActivitiesCtrl')
            }
          }
        }
      })

      .state('tab.treehole', {
        url: '/treehole',
        views: {
          'tab-treehole': {
            templateUrl: 'templates/tab-treehole.html',
            controller: 'TabTreeHoleCtrl',
            resolve:{
              deps: app.loadControllerJs('./controllers/TabTreeHoleCtrl')
            }
          }
        }
      })

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl',
            resolve:{
              //这里要执行加载js，我们使用$q的方法阻塞执行
              //定义了一个方法，这个方法接受一个路径名称或者包含路径名称的数组
              //使用$q的方式异步执行
              //这里的话应该是这么理解的，使用require的方式加载文件，通过require的相应callback
              //响应了$q的执行结果事件resolve
              deps: app.loadControllerJs('./controllers/DashCtrl')
            }
          }
        }
      })

      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl',
            resolve:{
              deps: app.loadControllerJs('./controllers/ChatsCtrl')
            }
          }
        }
      })
      .state('tab.chat-detail', {
      url: '/chats/:gameId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl',
            resolve:{
              deps: app.loadControllerJs('./controllers/ChatDetailCtrl')
            }
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl',
            resolve:{
              deps: app.loadControllerJs('./controllers/AccountCtrl')
            }
          }
        }
      });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/activities');
    });

    return app;
  });
