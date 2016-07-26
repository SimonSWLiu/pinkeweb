define([],function () {
  "use strict";
  var factory = function ($http,$q) {
    return {
      getGameData: function(gameId) {
        var deferred = $q.defer();
        var url = "http://test.lbwan.com/lbopen/game/getGameById.json?id="+gameId;
        url+="&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function (data) {
          //业务处理
          var data = data.data;
          data.icon = "http://test.lbwan.com/res/"+data.icon;
          deferred.resolve(data);
        }).error(function (error) {
          //业务处理
          deferred.reject(error)
        })
        return deferred.promise;
      }
    };
  }
  factory.$inject = ['$http','$q'];
  return factory;
})
