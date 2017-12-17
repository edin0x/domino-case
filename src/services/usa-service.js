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
        const populationDataResult = csvParse(populationCsvData, { delimiter: ',', columns: true }).filter(pd => pd.State === stateAbbr);
        let populationData = {};

        if (populationDataResult.length > 0) {
          populationData = populationDataResult[0];
          delete populationData.State;
        }

        return Object.entries(populationData)
      })
    )
  }

  getStateData() {
    return fetch('/static/data/usa/states.json').then(response => response.json())
  }
}

export default new CountryService();
