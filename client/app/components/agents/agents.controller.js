
class AgentsController {
    constructor(agentsService) {
        "ngInject"
        this.fetchAgentService = agentsService;
        this.name = 'agents';
        this.searchTerm = '';
        this.agents;
        this.limit = 0;
        this.loading = false;
        this.fetchAgents = () => {
            this.loading = true;
           this.fetchAgentService.getAgents(this.searchTerm)
               .then(response => {
                   this.limit = 10;
                   this.agents = response.Results;
                   this.loading = false;
               });
        }

    }
}

// AgentsController.$inject = ['agentsService'];

export default AgentsController;
