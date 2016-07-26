//.controller('AccountCtrl', function($scope) {
//  $scope.settings = {
//    enableFriends: true
//  };
//});
//修改后的文件如下
define(['app'], function (app) {
  'use strict';
  function ctrl($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }

  ctrl.$inject = ['$scope'];
  app.registerController('AccountCtrl',ctrl);
  //return ctrl;
});

