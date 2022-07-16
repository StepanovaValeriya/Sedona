<!-- @format -->

<template>
  <section class="page__map map">
    <div class="map__container _container">
      <div class="map__image _ibg">
        <img src="../assets/img/map.jpg" alt="map" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.page {
  &__map {
  }
}
.map {
  &__container {
  }

  &__image {
    padding: 0 0 40% 0;
    @include breakpoint(sm) {
      padding: 0 0 60% 0;
    }
  }
}
</style>
