<template>
  <Main></Main>
  <Features></Features>
  <ButtonSearch></ButtonSearch>
  <Map></Map>
</template>

<script>
import Main from '../components/Main.vue';
import Features from '../components/Features.vue';
import ButtonSearch from '../components/ButtonSearch.vue'
import Map from '../components/Map.vue'

export default {
  name: 'index',
  components: { Main, Features, ButtonSearch, Map },
};
</script>
