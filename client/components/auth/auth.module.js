'use strict';

angular.module('ttstesteApp.auth', [
  'ttstesteApp.constants',
  'ttstesteApp.util',
  'ngCookies'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
