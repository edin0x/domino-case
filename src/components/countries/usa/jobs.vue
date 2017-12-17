<template>
  <div>
    <p>Jobs of {{stateAbbr}}</p>
    <p>{{jobsData}}</p>
  </div>
</template>

<script>
  import UsaService from '../../../services/usa-service';
  export default {
    name: "jobs",
    data() {
      return {
        jobsData: undefined
      }
    },
    props: ['stateAbbr'],
    created() {
      UsaService.getJobsData().then(jobsData => {
        this.jobsData = jobsData;
      })
    }
  }
</script>
