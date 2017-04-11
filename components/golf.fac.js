(function() {

  "use strict";

  angular
    .module('frontlineGolf')
    .factory('golfFactory', function($http, $firebaseArray) {

      var ref = new Firebase('https://frontlinegolf-1c897.firebaseio.com/');

      return {
        ref: $firebaseArray(ref)
      }
      
    });
    
})();