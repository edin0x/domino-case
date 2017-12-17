<template>
  <div v-if="chartData.length > 0">
    <h3>Jobs of {{stateAbbr}}</h3>
    <doughnut :chart-data="chartData"></doughnut>
  </div>
  <div v-else>
    No job data found for this state.
  </div>
</template>

<script>
  import Doughnut from '../../visualizations/doughnut';
  import UsaService from '../../../services/usa-service';
  export default {
    components: {
      Doughnut
    },
    name: "jobs",
    data() {
      return {
        chartData: []
      }
    },
    props: ['stateAbbr'],
    created() {
      this.loadJobsData(this.stateAbbr);
    },
    methods: {
      loadJobsData(stateAbbr) {
        UsaService.getJobsData(stateAbbr).then(jobsData => {
          this.chartData = jobsData.map(jd => ({ label: jd[0], value: jd[1] }));;
        })
      }
    },
    watch: {
      stateAbbr(newVal) {
        this.loadJobsData(newVal)
      }
    }
  }
</script>
