import firebase from 'firebase'

export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
	// Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyDYyhkZtWDZykb9dn0fbQIHWqzUiQEfISE",
    authDomain: "project-1-294ce.firebaseapp.com",
    databaseURL: "https://project-1-294ce.firebaseio.com",
    storageBucket: "project-1-294ce.appspot.com",
    messagingSenderId: "8332533868"
  });
  

  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('auth', {
      url: '/',
      template: require('./views/auth.html'),
      controller: 'AuthController',
      controllerAs: 'vm'
    })
}