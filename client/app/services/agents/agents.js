
const agentsService = ($http) => {
    const baseUrl = 'https://api.ratemyagent.com.au/autosearch/agents';
    let data = [];

    const getAgents = (searchTerm) => {
        return $http({
            url: baseUrl,
            method: 'GET',
            params: {SearchTerm: searchTerm}
        }).then(response => data = response.data);
T
    }

    return { getAgents }
}

agentsService.$inject = ['$http'];

export default agentsService;
