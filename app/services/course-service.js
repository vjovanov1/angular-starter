WPAngularStarter.factory('CourseService', [
  '$resource',
  function($resource) {
    return $resource('/api/courses/:id', {}, {
      getByStudent: {
        url: '/api/courses/by_student/:student',
        method: 'GET',
        isArray: true
      }
    });
  }
]);