<template>
  <div>
    <p>Population of {{stateAbbr}}</p>
    <p>{{populationData}}</p>
  </div>
</template>

<script>
  import UsaService from '../../../services/usa-service';
  export default {
    name: "jobs",
    data() {
      return {
        populationData: undefined
      }
    },
    props: ['stateAbbr'],
    created() {
      UsaService.getPopulationData().then(populationData => {
        this.populationData = populationData;
      })
    }
  }
</script>
