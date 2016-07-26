//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})
//修改后的文件如下
define(['app'], function (app) {
  'use strict';
  function ctrl($scope, $stateParams, ChatDetailService) {
    ChatDetailService.getGameData($stateParams.gameId).then(function (data) {
      $scope.chat = data;
    }, function (error) {
      console.log(error)
    });
  }
  ctrl.$inject = ['$scope', '$stateParams', 'ChatDetailService'];
  //return ctrl;
  app.registerController('ChatDetailCtrl',ctrl);
});
