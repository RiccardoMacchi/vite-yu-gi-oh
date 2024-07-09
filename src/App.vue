<script>
import AppHeader from './components/AppHeader.vue';
import AppWrapCard from './components/AppWrapCard.vue';

export default {
  name: "App",
  components: {
    AppHeader,
    AppWrapCard,
  }
}
</script>

<template>
  <AppHeader />
</template>

<style lang="scss">
@use "./styles/general.scss";

</style>
