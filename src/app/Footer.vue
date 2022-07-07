<template>
  <footer class="footer__container _container">
    <div class="footer__body">
      <div class="footer__contacts">
        <span>#visitsedona</span>
        <span>+7 800 555-86-28</span>
      </div>
      <ul class="footer__social social">
        <li class="social__item">
          <a class="social__link" href="#"
            ><img src="../assets/img/footer/fb.png" alt="fb"
          /></a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#"
            ><img src="../assets/img/footer/twitter.png" alt="twitter"
          /></a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#"
            ><img src="../assets/img/footer/youtube.png" alt="youtube"
          /></a>
        </li>
      </ul>
      <div class="footer__info">
        <span>website by</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__container {
    width: 100%;
    padding: 36px 10px;
    @include breakpoint(sm) {
      padding: 16px 10px;
    }
  }
  &__body {
    display: flex;
    justify-content: space-around;
    align-items: center;
    @include breakpoint(sm) {
      flex-direction: column;
      gap: 5px;
    }
  }
  &__contacts {
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    @include breakpoint(md) {
      font-size: 16px;
      line-height: 16px;
    }
  }
  &__info {
    line-height: 26px;
  }
}
.social {
  display: flex;
  gap: 6px;

  &__item {
  }

  &__link {
  }
}
</style>
