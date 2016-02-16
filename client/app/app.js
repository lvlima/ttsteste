'use strict';

angular.module('ttstesteApp', [
  'ttstesteApp.auth',
  'ttstesteApp.admin',
  'ttstesteApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
])
  .config(function(, $locationProvider) {

    $locationProvider.html5Mode(true);
  });
