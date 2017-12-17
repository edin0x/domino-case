import 'whatwg-fetch';

class CountryService {
  getJobsData() {
    return fetch('/static/data/usa/jobs.json').then(response => response.json())
  }

  getPopulationData() {
    return fetch('/static/data/usa/population.csv').then(response => response.text())
  }

  getStateData() {
    return fetch('/static/data/usa/states.json').then(response => response.json())
  }
}

export default new CountryService();
