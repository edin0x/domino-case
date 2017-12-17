<template>
  <div>
    <h3>Population of {{stateAbbr}}</h3>
    <div v-if="chartData.length > 0">
      <bar-chart :chart-data="chartData"></bar-chart>
    </div>
    <div v-else>
      No population data found for this state.
    </div>
  </div>
</template>

<script>
  import BarChart from '../../visualizations/bar-chart';
  import UsaService from '../../../services/usa-service';
  export default {
    name: "jobs",
    components: {
      BarChart
    },
    data() {
      return {
        chartData: []
      }
    },
    props: ['stateAbbr'],
    created() {
      this.loadPopulationData(this.stateAbbr);
    },
    methods: {
      loadPopulationData(stateAbbr) {
        UsaService.getPopulationData(stateAbbr).then(populationData => {
         this.chartData = populationData.map(pd => ({ label: pd[0], value: pd[1] }));
        })
      }
    },
    watch: {
      stateAbbr(newVal) {
        this.loadPopulationData(newVal)
      }
    }
  }
</script>
