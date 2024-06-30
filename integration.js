const axios = require('axios');

const getTransportOptions = async (location, examDetails) => {
    const responses = await Promise.all([
        axios.get(`https://api.metroservice.com/route?location=${location}&examDetails=${examDetails}`),
        axios.get(`https://api.ola.com/fare?location=${location}&destination=${examDetails}`),
        axios.get(`https://api.uber.com/fare?location=${location}&destination=${examDetails}`)
    ]);

    return responses.map(response => response.data);
};

module.exports = { getTransportOptions };
