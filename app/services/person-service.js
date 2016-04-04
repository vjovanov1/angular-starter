WPAngularStarter.factory('PersonService', [
  function() {
    console.log('person service invoked');
    var persons = [{
      id: 1,
      name: "Riste",
      lastName: "Stojanov"
    }, {
      id: 2,
      name: "Dimitar",
      lastName: "Stojanov"
    }, {
      id: 3,
      name: "Riste",
      lastName: "Trajanov"
    }, {
      id: 4,
      name: "Dimitar",
      lastName: "Trajanov"
    }];

    return {
      query: function() {
        return persons;
      },
      get: function(id) {
        var result = null;
        angular.forEach(persons, function(p) {
          if(p.id == id) {
            result = p;
          }
        });
        return result;
      }

    };
  }
]);