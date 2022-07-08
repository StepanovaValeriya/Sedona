<template>
  <div class="wrapper">
    <Header></Header>
    <main class="page">
      <router-view></router-view>
    </main>
    <Footer @modal="showModal"></Footer>
    <Modal
      :altSocial="alt"
      v-model="isShowModal"
      @close="isShowModal = false"
    ></Modal>
  </div>
</template>

<script>
import Header from './app/Header.vue';
import Footer from './app/Footer.vue';
import Modal from './app/Modal.vue';
export default {
  data() {
    return {
      isShowModal: false,
      alt: '',
    };
  },
  methods: {
    showModal(data) {
      this.isShowModal = true;
      this.alt = data;
    },
  },
  components: {
    Header,
    Footer,
    Modal,
  },
};
</script>

<style lang="scss">
@import 'materialize-css/dist/css/materialize.min.css';
.wrapper {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.page {
  flex: 1 1 auto;
}
</style>
