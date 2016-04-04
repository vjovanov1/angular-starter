WPAngularStarter.controller('CourseController',
  ['$scope',
    'CourseService',
    'toastr',
    '$modal',
    function($scope, CourseService, toastr, $modal) {

      $scope.courses = CourseService.query();

      $scope.new = function() {
        $scope.entity = {};
      };


      $scope.save = function() {
        CourseService.save($scope.entity, function(data) {
          // callback function (after -save)
          toastr.success('course saved');
          $scope.courses = CourseService.query();
        }, function() {
          // error callback function
          toastr.error('error occurred');
        });
      };

      $scope.edit = function(id) {
        $scope.entity = CourseService.get({id: id});
      };

      var deleteDialog = $modal({
        scope: $scope,
        title: 'true',
        template: 'views/templates/modal-dialog.tpl.html',
        contentTemplate: '/views/modals/delete-course-prompt.html',
        show: false
      });

      $scope.removePrompt = function(id) {
        deleteDialog.show();
        $scope.removeId = id;

      };

      $scope.remove = function(id) {
        CourseService.remove({id: id}, function() {
          toastr.success('course deleted');
          $scope.entity = {};
          $scope.courses = CourseService.query();
          deleteDialog.hide();
        }, function() {
          toastr.error('course not removed! Error occurred.');
        });
      }


    }]);