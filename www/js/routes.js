angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('main_tabs.tab_activities', {
    url: '/tab_activities',
    views: {
      'tab1': {
        templateUrl: 'templates/tab_activities.html',
        controller: 'tabActivitiesCtrl'
      }
    }
  })

  .state('main_tabs.tab_tree_hole', {
    url: '/tree_hole_list',
    views: {
      'tab2': {
        templateUrl: 'templates/tab_tree_hole.html',
        controller: 'tabTreeHoleCtrl'
      }
    }
  })

  .state('about_me', {
    url: '/about_me',
    templateUrl: 'templates/about_me.html',
    controller: 'aboutMeCtrl'
  })

  .state('main_tabs', {
    url: '/main_tabs',
    templateUrl: 'templates/main_tabs.html',
    abstract:true
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/main_tabs/tab_activities')



});
