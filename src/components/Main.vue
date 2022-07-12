<template>
  <div class="page__main-block main-block">
    <div class="main-block__container _container">
      <div class="main-block__image _ibg">
        <img src="../assets/img/main/main.jpg" alt="cover" />
      </div>
      <div class="main-block__content">
        <h1>
          Седона — небольшой городок в Аризоне,<br />
          заслуживающий большего!
        </h1>
        <p>Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-block {
  &__container {
    padding: 0;
    position: relative;
  }
  &__image {
    display: block;
    padding: 0 0 50% 0;
  }
  &__content {
    padding: 42px 10px 51px 10px;
    text-align: center;
    h1 {
      font-weight: 700;
      font-size: 21px;
      line-height: 26px;
      padding-bottom: 16px;
      @include breakpoint(sm) {
        font-size: 16px;
      }
    }
    p {
      margin-top: 16px;
      line-height: 26px;
      @include breakpoint(sm) {
        font-size: 12px;
      }
    }
  }
}
</style>
