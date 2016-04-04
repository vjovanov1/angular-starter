WPAngularStarter.controller('SimpleController',
  ['$scope', 'PersonService', '$location',
    function($scope, PersonService, $location) {
      console.log('controller initialization')
      $scope.person = PersonService.get(2);

      $scope.click = function() {
        console.log($scope.person.name);
        $scope.person.name = "";
      };

      $scope.change = function() {
        console.log($scope.person.name);
      };

      $scope.persons = PersonService.query();


    }]);