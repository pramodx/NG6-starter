import angular from 'angular';
import agentsService from './agents/agents';

let coreModule = angular.module('app.core', [])
    .factory('agentsService', agentsService)

    .name;

export default coreModule;
