<!-- @format -->

<template>
  <section class="page__search search">
    <div class="search__container _container">
      <h1 class="search__title">Заинтересовались?</h1>
      <p class="search__text">
        Укажите предполагаемые даты поездки, <br />
        и мы покажем вам лучшие предложения гостиниц в седоне
      </p>
      <div class="search__button">
        <button type="submit">Поиск гостиницы в Седоне</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search {
  &__container {
    padding: 58px 15px 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    text-align: center;
    @include breakpoint(sm) {
      font-size: 21px;
    }
  }

  &__text {
    text-align: center;
    line-height: 24px;
  }

  &__button {
    button {
      @include button;
      background-color: $bcButtonDark;
      padding: 30px 50px;
      font-size: 21px;
      line-height: 26px;
      min-height: 86px;
      text-transform: uppercase;
      @include breakpoint(sm) {
        padding: 20px 20px;
        font-size: 16px;
      }

      &:hover {
        background-color: $buttonHoverDark;
      }
      &:active {
        @include active;
        background-color: $buttonActiveDark;
      }
    }
  }
}
</style>
