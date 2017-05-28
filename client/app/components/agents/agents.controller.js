
class AgentsController {
    constructor(agentsService) {
        "ngInject"
        this.fetchAgentService = agentsService;
        this.name = 'agents';
        this.searchTerm = '';
        this.agents = [];
        this.limit = 0;
        this.fetchAgents = () => {
            //console.log(this.searchTerm);
           this.fetchAgentService.getAgents(this.searchTerm)
               .then(response => {
                   this.limit = 10;
                   this.agents = response.Results;
               });
            console.log('agents', this.agents)
        }

    }
}

// AgentsController.$inject = ['agentsService'];

export default AgentsController;
