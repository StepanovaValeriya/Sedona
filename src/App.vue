<template>
  <div class="wrapper">
    <Header></Header>
  </div>
</template>

<script>
import Header from './app/Header.vue';
export default {
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
