import 'whatwg-fetch';

class CountryService {
  getJobTypes() {
    return fetch('/static/data/usa/jobs.json').then(response => response.json())
  }

  getPopulationComposition() {
    return fetch('/static/data/usa/population.csv')
  }

  getStateData() {
    return fetch('/static/data/usa/states.json').then(response => response.json())
  }
}

export default new CountryService();
