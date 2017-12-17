<template>
  <div class="ui segments">
    <div class="ui top attached very padded text basic segment">
      <h1>United states visualizations</h1>
      <div class="ui search">
        <div class="ui icon input">
          <input v-model="searchQuery" class="prompt" type="text" placeholder="Search countries...">
          <i class="search icon"></i>
        </div>
        <div v-if="searchResults.length > 0" class="results transition visible" style="display:block !important;">
          <template v-for="state in searchResults">
            <router-link :to="{ path: '/usa/state/' + state.abbr }">
              <span class="result" @click="resetSearchResults">{{ state.name }}</span>
            </router-link>
          </template>
        </div>
      </div>
    </div>

    <div class="ui bottom attached segment" v-if="selectedState">
      <h2>{{ selectedState }}</h2>
    </div>
  </div>
</template>

<script>
import UsaService from '../../services/usa-service';

export default {
  name: 'US',
  created() {
    this.loadStates();
  },
  data() {
    return {
      searchQuery: '',
      states: {}
    };
  },
  computed: {
    searchResults() {
      if (!this.searchQuery) {
        return []
      }

      return Object.entries(this.states)
        .filter(entry => entry[1].indexOf(this.searchQuery) !== -1)
        .map(entry => ({ abbr: entry[0], name: entry[1] }) );
    },
    selectedState() {
      if (this.$route.params) {
        return this.states[this.$route.params.stateAbbr] || '';
      }

      return '';
    }
  },
  methods: {
    loadStates() {
      UsaService.getStateData().then(states => {
        this.states = states;
      });
    },
    resetSearchResults() {
      this.searchQuery = ''
    }
  }
};
</script>
