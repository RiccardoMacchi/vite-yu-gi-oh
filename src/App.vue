<script>
// Import di axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppWrapCard from './components/AppWrapCard.vue';
import AppSearch from './components/AppSearch.vue';

// Importazione dello store
import { store } from './store';

export default {
  name: "App",
  components: {
    AppHeader,
    AppWrapCard,
    AppSearch
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    axiosRequest() {
      if (store.newSearch !== "Select Archetype") {
        let apiReqArchetype = store.apiUrl + store.addUrlArchetype + store.newSearch
        axios.get(apiReqArchetype)
          .then(response => {
            console.log("cambia")
            console.log("archetype search", store.newSearch)
            console.log(response.data.data);
            store.cardList = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        axios.get(store.apiUrl)
          .then(response => {
            console.log("cambia")
            console.log("archetype search", store.newSearch)
            console.log(response.data.data);
            store.cardList = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
      }

    },
    axiosRequestArchetype() {
      axios.get(store.apiArchetype)
        .then(response => {
          console.log(response.data);
          store.archetype = response.data;
          console.log("store archetype", store.archetype)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created() {
    this.axiosRequest();
    this.axiosRequestArchetype();
  }

}
</script>

<template>
  <AppHeader />
  <main>
    <AppSearch @onlyArchetype="axiosRequest" />
    <AppWrapCard />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/variables" as*;

main {
  background-color: $primary;
  padding-top: 80px;
}
</style>
