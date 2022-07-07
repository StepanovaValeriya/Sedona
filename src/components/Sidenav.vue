<template>
  <div class="mobile-menu">
    <ul id="slide-out" class="sidenav" ref="mobileMenu">
      <li class="menu__item">
        <a class="menu__link" href="#">Информация</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Фото и видео</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Карта штата</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Гостиницы</a>
      </li>
    </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger"
      ><i class="material-icons">dehaze</i></a
    >
    <a class="logo" href="#"><img src="../assets/img/logo.svg" alt="logo" /></a>
  </div>
</template>

<script>
export default {
  name: 'sidenav',
  props: {},
  data() {
    return {
      mobileMenu: null,
    };
  },

  mounted() {
    this.mobileMenu = M.Sidenav.init(this.$refs.mobileMenu);
  },
};
</script>

<style lang="scss" scoped>
// @import 'materialize-css/dist/css/materialize.min.css';
.mobile-menu {
  display: none;
  @include breakpoint(md) {
    display: block;
  }
}
.sidenav-trigger {
  color: #039be5;
}
.logo {
  float: right;
}
</style>
