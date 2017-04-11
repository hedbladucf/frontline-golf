(function() {

  "use strict";

  angular
    .module('frontlineGolf', ['ngMaterial', 'firebase'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .warnPalette('deep-orange')
        .accentPalette('indigo');
    });
        
})();

