import angular from 'angular';
import uiRouter from 'angular-ui-router';
import agentsComponent from './agents.component';
import agentsService from './../../core/agents/agents';

let agentsModule = angular.module('agents', [
    uiRouter
])

    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('agents', {
                url: '/agents',
                component: 'agents'
            });
    })

    .component('agents', agentsComponent.name)
    .service('agentsService', agentsService)

    .name;

export default agentsModule;
