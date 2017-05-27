
const agentsService = ($http) => {
    const baseUrl = 'https://api.ratemyagent.com.au/autosearch/agents';
    let data = [];

    const getAgents = (param) => {
        return $http.get(`${baseUrl}?SearchTerm=${param}`)
            .then(response => data = response.data);

    }

    return { getAgents }
}

agentsService.$inject = ['$http'];

export default agentsService;
