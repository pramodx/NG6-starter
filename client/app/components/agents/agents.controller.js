
class AgentsController {
    constructor(agentsService) {
        "ngInject"
        this.fetchAgentService = agentsService
        this.name = 'agents';
        this.searchTerm = '';
        this.fetchAgents = () => {
            console.log(this.searchTerm);
            this.fetchAgentService.getAgents(this.searchTerm)
        }

    }
}

// AgentsController.$inject = ['agentsService'];

export default AgentsController;
