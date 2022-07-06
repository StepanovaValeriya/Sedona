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
        <BurgerMenu></BurgerMenu>
      </nav>
    </div>
  </header>
</template>

<script>
import BurgerMenu from '../components/BurgerMenu.vue';
export default {
  data() {
    return {};
  },
  components: {
    BurgerMenu,
  },
};
</script>

<style lang="scss" scoped>
.header__container {
  // height: 56px;
}
.menu {
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  color: $colormainBig;
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
    &:hover {
      color: $hoverColor;
    }
    &:active {
      color: $activeColor;
      opacity: 0.3;
      mix-blend-mode: normal;
    }
    &:checked {
      color: $checkedColor;
    }
    @include breakpoint(md) {
      display: none;
    }
  }
  &__link {
    img {
      position: absolute;
      top: 0;
      left: 45%;
    }
  }
}
</style>
