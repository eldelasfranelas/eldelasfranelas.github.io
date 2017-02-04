/**
 * Created by eldelasfranelas on 29/01/2017.
 */
// angular
//     .module('eldelasfranelas', ['ngRoute'])
//     .config(function ($routeProvider) {
//         $routeProvider
//             .when('/home', {
//                 templateUrl: 'app/home/home.html',
//                 controller: 'home',
//                 controllerAs: 'vm'
//             })
//             .when('/resume', {
//                 templateUrl: 'app/resume/resume.html',
//                 controller: 'resume',
//                 controllerAs: 'vm'
//             })
//             // .when('/portafolio', {
//             //     templateUrl: 'app/portafolio/portafolio.html',
//             //     controller: 'portafolio',
//             //     controllerAs: 'vm'
//             // })
//             // .when('/habilidades', {
//             //     templateUrl: 'app/habilidades/habilidades.html',
//             //     controller: 'habilidades',
//             //     controllerAs: 'vm'
//             // })
//             // .when('/contacto', {
//             //     templateUrl: 'app/contacto/contacto.html',
//             //     controller: 'contacto',
//             //     controllerAs: 'vm'
//             // })
//             .otherwise('/home');
//     });

angular.module('eldelasfranelas', ['ui.router'])
    .config(route);

function route($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            name: 'home',
            url: '/home',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'app/home/home.html',
                    controller: 'home',
                    controllerAs: 'vm'
                },
                'content@home': {
                    templateUrl: 'app/content/content.html',
                    controller: 'home',
                    controllerAs: 'vm'
                }
            }

        })
        .state('resume', {
            name: 'resume',
            url: '/resume',
            parent: 'home',
            views: {
                'content@home': {
                    templateUrl: 'app/resume/resume.html',
                    controller: 'resume',
                    controllerAs: 'vm'
                }
            }
        })
        .state('portafolio', {
            name: 'portafolio',
            url: '/portafolio',
            parent: 'home',
            views: {
                'content@home': {
                    templateUrl: 'app/portafolio/portafolio.html',
                    controller: 'portafolio',
                    controllerAs: 'vm'
                }
            }
        })
        .state('contacto', {
            name: 'contacto',
            url: '/contacto',
            parent: 'home',
            views: {
                'content@home': {
                    templateUrl: 'app/contacto/contacto.html',
                    controller: 'contacto',
                    controllerAs: 'vm'
                }
            }
        })

    $urlRouterProvider.otherwise('/home')
}
