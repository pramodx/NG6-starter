import angular from 'angular';
import agentsService from './agents/agents';

let servicesModule = angular.module('app.services', [])
    .service({agentsService})

    .name;

export default servicesModule;
