'use strict';

class LoginController {
  constructor(Auth) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

angular.module('ttstesteApp')
  .controller('LoginController', LoginController);
