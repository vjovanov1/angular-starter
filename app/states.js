/**
 * Secured states
 * All inherit from root (which has data : secured)
 */
WPAngularStarter.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('root', {
      url: '/',
      views: {
        navbar: {
          templateUrl: 'views/main/navbar.html'
        },
        main: {
          templateUrl: 'views/main/main.html'
        }
      }
    });

    $stateProvider.state('root.students', {
      url: 'students',
      views: {
        'main@': {
          templateUrl: "views/main/students.html"
        }
      }
    });

    $stateProvider.state('root.courses', {
      url: 'courses',
      views: {
        'main@': {
          templateUrl: "views/main/courses.html",
          controller: "CourseController"
        }
      }
    });
  }])
  .run([
    '$rootScope',
    function($rootScope) {

      $rootScope.menuItems = [{
        state: 'root',
        icon: 'fa-home',
        name: 'wp.home'

      }, {
        state: 'root.students',
        icon: 'fa-users',
        name: 'wp.students'
      }, {
        state: 'root.courses',
        icon: 'fa-users',
        name: 'wp.courses'
      }];

    }]);