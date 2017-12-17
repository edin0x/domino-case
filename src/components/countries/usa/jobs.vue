<template>
  <div v-if="jobsDataResult.length > 0">
    <h3>Jobs of {{stateAbbr}}</h3>
    <p>{{jobsDataResult[0]}}</p>
  </div>
  <div v-else>
    No job data found for this state.
  </div>
</template>

<script>
  import UsaService from '../../../services/usa-service';
  export default {
    name: "jobs",
    data() {
      return {
        jobsDataResult: []
      }
    },
    props: ['stateAbbr'],
    created() {
      this.loadJobsData(this.stateAbbr);
    },
    methods: {
      loadJobsData(stateAbbr) {
        UsaService.getJobsData(stateAbbr).then(jobsDataResult => {
          this.jobsDataResult = jobsDataResult;
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
