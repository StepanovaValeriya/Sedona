<template>
  <section class="page__features features">
    <div class="features__container _container">
      <div class="features__cards card">
        <div class="card__main">
          <div class="card__main__content">
            <h2 class="card__title">
              Настоящий <br />
              городок
            </h2>
            <span class="card__number">№1</span>
            <p class="card__text">
              Седона — не аттракцион для туристов, там <br />
              течёт своя жизнь
            </p>
          </div>
          <div class="card__main__image card__main__image_left _ibg">
            <img src="../assets/img/features/city.jpg" alt="city" />
          </div>
        </div>

        <div class="card__main">
          <div class="card__main__content">
            <h2 class="card__title">
              Там есть <br />
              Мост дьявола
            </h2>
            <span class="card__number">№2</span>
            <p class="card__text">
              Да, по нему можно пройти! Если конечно <br />
              вы осмелитесь
            </p>
          </div>
          <div class="card__main__image card__main__image_right _ibg">
            <img src="../assets/img/features/devilbridge.jpg" alt="bridge" />
          </div>
        </div>
        <div class="card__advantages card__advantages_grey">
          <div class="card__advantages__item">
            <h2 class="card__title">
              Небольшая <br />
              площадь
            </h2>
            <span class="card__number">№3</span>
            <p class="card__text">
              Все достопримечательности <br />
              находятся очень близко
            </p>
          </div>
          <div class="card__advantages__item">
            <h2 class="card__title">
              Красивая <br />
              дорога
            </h2>
            <span class="card__number">№4</span>
            <p class="card__text">
              Ехать в седону из лас-вегаса совсем <br />
              не скучно!
            </p>
          </div>
          <div class="card__advantages__item">
            <h2 class="card__title">
              Мало <br />
              туристов
            </h2>
            <span class="card__number">№5</span>
            <p class="card__text">
              Большинство едет в гранд каньон <br />
              и толпится там
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Description from './Description.vue';
export default {
  name: 'features',
  data() {
    return {};
  },
  components: { Description },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: none;
  margin: 0;
  line-height: 21px;
  &__title {
    font-weight: 700;
    font-size: 21px;
  }
  &__number {
    &::before,
    &::after {
      content: '-';
      margin: 0 4px;
    }
  }
  &__main {
    display: flex;
    &__content {
      flex: 0 0 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 25px;
      background-color: $bcBlue;
      color: $colormainWhite;
      padding: 47px 15px 54px 15px;
    }
    &__image {
      flex: 1 1 auto;
      display: block;
      padding: 0 0 20% 0;
      &_right {
        order: -1;
      }
    }
  }
  &__advantages {
    display: flex;
    justify-content: center;
    padding: 61px 15px 82px 15px;
    &_grey {
      background-color: #eeeeee;
    }
    &__item {
      flex: 0 0 35%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 25px;
      img {
        order: -1;
      }
    }
  }
}
</style>
