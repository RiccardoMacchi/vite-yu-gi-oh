<script>
// Import di axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppWrapCard from './components/AppWrapCard.vue';

// Importazione dello store
import { store } from './store';

export default {
  name: "App",
  components: {
    AppHeader,
    AppWrapCard,
  },
  data(){
    return {
      store,
    }
  },
  methods: {
    axiosRequest(){
      axios.get(store.apiUrl)
          .then(response =>{
              console.log(response.data.data);
              store.cardList = response.data.data
          })
          .catch(error => {
              console.log(error)
          })
        }
  },
  created(){
    this.axiosRequest();
  }

}
</script>

<template>
  <AppHeader />
  <main>
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
