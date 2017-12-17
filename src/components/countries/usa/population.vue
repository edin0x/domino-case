<template>
  <div>
    <h3>Population of {{stateAbbr}}</h3>
    <div v-if="populationDataFound">
      <p>{{populationStateData}}</p>
    </div>
    <div v-else>
      No population data found for this state.
    </div>
  </div>
</template>

<script>
  import UsaService from '../../../services/usa-service';
  export default {
    name: "jobs",
    data() {
      return {
        populationDataFound: true,
        populationStateData: undefined
      }
    },
    props: ['stateAbbr'],
    created() {
      this.loadPopulationData(this.stateAbbr);
    },
    methods: {
      loadPopulationData(stateAbbr) {
        UsaService.getPopulationData(stateAbbr).then(populationData => {
          if (populationData.length > 0) {
            this.populationStateData = populationData[0];
            this.populationDataFound = true;
          } else {
            this.populationDataFound = false;
          }
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
