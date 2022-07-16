<template>
  <Main></Main>
  <Features></Features>
  <ButtonSearch></ButtonSearch>
</template>

<script>
import Main from '../components/Main.vue';
import Features from '../components/Features.vue';
import ButtonSearch from '../components/ButtonSearch.vue'

export default {
  name: 'index',
  components: { Main, Features, ButtonSearch },
};
</script>
