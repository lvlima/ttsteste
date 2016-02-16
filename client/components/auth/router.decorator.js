'use strict';

(function() {

angular.module('ttstesteApp.auth')
  .run(function($rootScope, Auth) {
    // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role
    $rootScope.$on(, function(event, next) {
      if (!next.authenticate) {
        return;
      }

      if (typeof next.authenticate === 'string') {
        Auth.hasRole(next.authenticate, _.noop).then(has => {
          if (has) {
            return;
          }

          event.preventDefault();
          return Auth.isLoggedIn(_.noop).then(is => {
          });
        });
      } else {
        Auth.isLoggedIn(_.noop).then(is => {
          if (is) {
            return;
          }

          event.preventDefault();
        });
      }
    });
  });

})();
