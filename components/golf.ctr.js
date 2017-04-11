(function() {

  "use strict";

  angular
    .module('frontlineGolf')
    .controller('golfController', function($scope, $mdSidenav, $mdDialog, $mdToast, golfFactory) {

      // golfFactory.getData().then(function(data) {
      //   $scope.data = data.data;
      //   //$scope.scores;
      //   console.log(data.data);
      // });
      $scope.data = golfFactory.ref;

      function showToast(message) {
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );
      }

      $scope.openSidebar = function() {
        $scope.sidebarTitle = 'New Player';
        $mdSidenav('left').open();
      }

      $scope.closeSidebar = function() {
        $scope.currentData = {};
        $mdSidenav('left').close();
      }

      $scope.saveData = function(currentData) {
        if(currentData) {
          $scope.data.$add(currentData);
          $scope.currentData = {};
          $scope.closeSidebar();
          showToast('Player Saved');
        }
      }

      $scope.editScore = function(currentData) {
        $scope.editing = true;
        $scope.sidebarTitle = 'Edit Score';
        $scope.currentData = currentData;
        $mdSidenav('left').open();
      }

      $scope.saveEdit = function(currentData) {
        $scope.editing = false;
        $scope.currentData = $scope.data.$getRecord(currentData.$id);
        $scope.data.$save($scope.currentData).then(function() {
          $scope.currentData = {};
          $mdSidenav('left').close();
          showToast('Edit Saved');
        });    
      }

      $scope.calculateAvgScore = function(score) {
        var array = new Array();
        array = score.split(",").map(Number);
        var result = 0;

        for(var i = 0; i < array.length; i++){
            result += array[i];
        }
        $scope.avgScore = result / array.length;
      }

    });
})();