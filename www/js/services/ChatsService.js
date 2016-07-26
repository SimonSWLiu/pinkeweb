define([],function () {
  "use strict";
  var factory = function ($http) {
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      getAllData: function(successCallback,failCallback) {
        var url = "http://test.lbwan.com:18080/lbopen/channel/getAllMakeGameListName.json?channelId=37&currentPage=1&pageSize=10"
        url+="&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function (data) {
          //业务处理
          var data = data.data.rows;
          for(var key in data){
            data[key].icon = "http://test.lbwan.com/res/"+data[key].icon;
          }
          successCallback(data)
        }).error(function (error) {
          //业务处理
          failCallback(error)
        })
        //var deferred = $q.defer();
        //deferred.resolve(chats);
        //return deferred.promise;
        //return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  }
  factory.$inject = ['$http'];
  return factory;
})
