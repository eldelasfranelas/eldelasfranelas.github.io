/**
 * Created by eldelasfranelas on 29/01/2017.
 */
(function () {
    'use strict';

    angular
        .module('eldelasfranelas')
        .controller('contacto', contacto);

    contacto.$inject = [];

    /* @ngInject */
    function contacto() {
        var vm = this;
        vm.title = 'contacto';
        console.log(vm.title);
    }

})();