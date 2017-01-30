/**
 * Created by eldelasfranelas on 29/01/2017.
 */
angular
    .module('eldelasfranelas', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/home.html',
                controller: 'home',
                controllerAs: 'vm'
            })
            .when('/resume', {
                templateUrl: 'app/resume/resume.html',
                controller: 'resume',
                controllerAs: 'vm'
            })
            // .when('/portafolio', {
            //     templateUrl: 'app/portafolio/portafolio.html',
            //     controller: 'portafolio',
            //     controllerAs: 'vm'
            // })
            // .when('/habilidades', {
            //     templateUrl: 'app/habilidades/habilidades.html',
            //     controller: 'habilidades',
            //     controllerAs: 'vm'
            // })
            // .when('/contacto', {
            //     templateUrl: 'app/contacto/contacto.html',
            //     controller: 'contacto',
            //     controllerAs: 'vm'
            // })
            .otherwise('/home');
    });

