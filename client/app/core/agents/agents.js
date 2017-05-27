import angular from 'angular';

const agentsService = ($resource) => {
    const baseUrl = 'https://api.ratemyagent.com.au/autosearch/agents';
    let data = [];

    const getAgents = (param) => {
        return $resource.get(`${baseUrl}/SearchTerm=${param}`)
            .then(response => data = response);
    }

    return { getAgents }
}





// agentsService.$inject = ['$resource'];

// console.log(agentsService)

export default agentsService;
