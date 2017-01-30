/**
 * Created by eldelasfranelas on 29/01/2017.
 */
(function () {
    'use strict';

    angular
        .module('eldelasfranelas')
        .controller('habilidades', habilidades);

    habilidades.$inject = [];

    /* @ngInject */
    function habilidades() {
        var vm = this;
        vm.title = 'habilidades';
        console.log(vm.title)
    }

})();

