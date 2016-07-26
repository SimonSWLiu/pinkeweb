//.controller('DashCtrl', function($scope,$ionicPopover,$timeout) {
//  $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
//    scope: $scope
//  });
//
//  // .fromTemplateUrl() 方法
//  $ionicPopover.fromTemplateUrl('my-popover.html', {
//    scope: $scope
//  }).then(function(popover) {
//    $scope.popover = popover;
//  });
//
//
//  $scope.openPopover = function($event) {
//    $scope.popover.show($event);
//  };
//  $scope.closePopover = function() {
//    $scope.popover.hide();
//  };
//  // 清除浮动框
//  $scope.$on('$destroy', function() {
//    $scope.popover.remove();
//  });
//  // 在隐藏浮动框后执行
//  $scope.$on('popover.hidden', function() {
//    // 执行代码
//  });
//  // 移除浮动框后执行
//  $scope.$on('popover.removed', function() {
//    // 执行代码
//  });
//})
//修改后的文件如下
define(['app'], function (app) {
  'use strict';
  function ctrl($scope,$ionicPopover,$timeout) {
    $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
      scope: $scope
    });

    // .fromTemplateUrl() 方法
    $ionicPopover.fromTemplateUrl('my-popover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });


    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    // 清除浮动框
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    // 在隐藏浮动框后执行
    $scope.$on('popover.hidden', function() {
      // 执行代码
    });
    // 移除浮动框后执行
    $scope.$on('popover.removed', function() {
      // 执行代码
    });
  }
  ctrl.$inject = ['$scope','$ionicPopover','$timeout'];
  //return ctrl;
  app.registerController('DashCtrl',ctrl);
});
