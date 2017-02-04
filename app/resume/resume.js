/**
 * Created by eldelasfranelas on 29/01/2017.
 */
(function () {
    'use strict';

    angular
        .module('eldelasfranelas')
        .controller('resume', resume);

    resume.$inject = [];

    /* @ngInject */
    function resume() {
        var vm = this;
        vm.title = 'resume';
        console.log(vm.title);
    }

})();

