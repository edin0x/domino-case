<template>
  <div class="ui segments">
    <div class="ui top attached very padded text basic segment">
      <h1>United states visualizations</h1>
      <p><router-link to="/">Go back to homepage</router-link></p>
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

      <div class="ui top attached tabular menu">
        <div
          v-for="viewName in Object.keys(views)"
          class="item"
          :class="selectedTab === viewName ? 'active': ''"
          @click="selectedTab = viewName; selectedView = views[viewName]"
        >{{ viewName }}</div>
      </div>
      <div class="ui bottom attached active tab segment">
        <component :is="selectedView" :state-abbr="selectedStateAbbr"></component>
      </div>
    </div>
    <div v-else>
      <div class="ui icon message">
        <i class="search icon"></i>
        <div class="content">
          <p>Search for a state and select one to display it.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsaPopulation from './population';
import UsaJobs from './jobs';
import UsaService from '../../../services/usa-service';

export default {
  name: 'usa',
  created() {
    this.loadStates();
  },
  data() {
    return {
      searchQuery: '',
      selectedTab: "Population",
      selectedView: UsaPopulation,
      states: {},
      views: {
        'Population': UsaPopulation,
        'Jobs': UsaJobs
      }
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
      if (this.selectedStateAbbr) {
        return this.states[this.selectedStateAbbr];
      }

      return '';
    },
    selectedStateAbbr() {
      if (this.$route.params) {
        return this.states[this.$route.params.stateAbbr] ? this.$route.params.stateAbbr : '';
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
