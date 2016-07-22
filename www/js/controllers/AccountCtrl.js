//.controller('AccountCtrl', function($scope) {
//  $scope.settings = {
//    enableFriends: true
//  };
//});
//修改后的文件如下
define([], function () {
  'use strict';
  function ctrl($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }

  ctrl.$inject = ['$scope'];
  return ctrl;
});

