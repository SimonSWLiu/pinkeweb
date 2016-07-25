//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})
//修改后的文件如下
define(['app'], function (app) {
  'use strict';
  function ctrl($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  }
  ctrl.$inject = ['$scope', '$stateParams', 'Chats'];
  app.registerController('ChatDetailCtrl',ctrl);
  // return ctrl;
});
