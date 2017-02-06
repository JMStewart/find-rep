import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getData = {
  senators: (state) => {
    return axios.get(`${baseUrl}/senators/${state}`)
      .then(response => response.data.results);
  },
  representatives: (state) => {
    return axios.get(`${baseUrl}/representatives/${state}`)
      .then(response => response.data.results);
  }
}

export default getData;