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
export default {
  name: 'US',
  data() {
    return {
      searchQuery: '',
      states: {
        "AL": "Alabama",
        "AK": "Alaska",
        "AS": "American Samoa",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "District Of Columbia",
        "FM": "Federated States Of Micronesia",
        "FL": "Florida",
        "GA": "Georgia",
        "GU": "Guam",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MH": "Marshall Islands",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "MP": "Northern Mariana Islands",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PW": "Palau",
        "PA": "Pennsylvania",
        "PR": "Puerto Rico",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VI": "Virgin Islands",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
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
      if (this.$route.params) {
        return this.states[this.$route.params.stateAbbr] || '';
      }

      return '';
    }
  },
  methods: {
    resetSearchResults() {
      this.searchQuery = ''
    }
  }
};
</script>
