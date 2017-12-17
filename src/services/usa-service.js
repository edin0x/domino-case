import 'whatwg-fetch';
const csvParse = require('csv-parse/lib/sync');

class CountryService {
  getJobsData(stateAbbr) {
    return fetch('/static/data/usa/jobs.json').then(response =>
      response.json().then(jobsData => jobsData.filter(jobData => jobData.name === stateAbbr))
    )}

  getPopulationData(stateAbbr) {
    return fetch('/static/data/usa/population.csv').then(response =>
      response.text().then(populationCsvData => {
        const output = csvParse(populationCsvData, { delimiter: ',', columns: true });
        return output.filter(pd => pd.State === stateAbbr);
      })
    )
  }

  getStateData() {
    return fetch('/static/data/usa/states.json').then(response => response.json()
    )
  }
}

export default new CountryService();
