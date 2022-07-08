<template>
  <header>
    <div class="header__container _container">
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <a class="menu__link" href="#">Информация</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">Фото и видео</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              <img src="../assets/img/logo.svg" alt="logo" />
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">Карта штата</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">Гостиницы</a>
          </li>
        </ul>
        <Sidenav></Sidenav>
      </nav>
    </div>
  </header>
</template>

<script>
import Sidenav from '../components/Sidenav.vue';
export default {
  name: 'header',
  data() {
    return {};
  },
  components: {
    Sidenav,
  },
};
</script>

<style lang="scss" scoped>
.header__container {
  height: 56px;
}
.menu {
  background-color: $colormainWhite;
  box-shadow: none;
  height: 0%;

  &__list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    @include breakpoint(lg) {
      justify-content: space-between;
    }
  }
  &__item {
    padding: 15px;
    @include breakpoint(lg) {
      padding: 15px 5px;
    }

    @include breakpoint(md) {
      display: none;
    }
  }
  &__link {
    color: $colormainBig;
    font-weight: 700;
    font-size: 14px;
    line-height: 26px;
    &:hover {
      color: $hoverColor;
      background-color: transparent;
    }
    &:active {
      color: $activeColor;
      @include active;
    }
    &:checked {
      color: $checkedColor;
    }
    img {
      position: absolute;
      top: 0;
      left: 45%;
      z-index: 99;
    }
  }
}
</style>
