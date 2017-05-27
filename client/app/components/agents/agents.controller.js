
class AgentsController {
    constructor(agentsService) {
        console.log(agentsService)
        this.fetchAgentService = agentsService
        this.name = 'agents';
        this.searchTerm = '';
        this.fetchAgents = () => {
            debugger
            console.log(this.searchTerm);
            this.fetchAgentService.getAgents(this.searchTerm)
        }

    }
}

AgentsController.$inject = ['agentsService'];

export default {
    controller: AgentsController
} ;
