<template>
  <div>
    <h3>Population of {{stateAbbr}}</h3>
    <div v-if="populationDataResult.length > 0">
      <p>{{populationDataResult[0]}}</p>
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
        populationDataResult: []
      }
    },
    props: ['stateAbbr'],
    created() {
      this.loadPopulationData(this.stateAbbr);
    },
    methods: {
      loadPopulationData(stateAbbr) {
        UsaService.getPopulationData(stateAbbr).then(populationDataResult => {
          this.populationDataResult = populationDataResult;
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
