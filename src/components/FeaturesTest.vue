<template>
  <section class="page__features features">
    <div class="features__container _container">
      <div class="features__cards card">
        <div class="card__main card__main_blue">
          <div class="card__item">
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
        <Description></Description>

        <div class="card__main card__main_blue">
          <div class="card__item">
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
        <div class="card__main card__main_grey">
          <div class="card__item" v-for="item in cardItem" :key="item.title">
            <h2 class="card__title" v-html="item.title"></h2>
            <span class="card__number">№{{ item.number }}</span>
            <p class="card__text" v-html="item.text"></p>
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
    return {
      cardItem: [
        {
          title: 'Небольшая <br/> площадь',
          number: '3',
          text: 'Все достопримечательности <br /> находятся очень близко',
        },
        {
          title: ' Красивая <br /> дорога',
          number: '4',
          text: 'Ехать в седону из лас-вегаса совсем <br /> не скучно!',
        },
        {
          title: ' Мало <br /> туристов',
          number: '3',
          text: '  Большинство едет в гранд каньон <br /> и толпится там',
        },
      ],
    };
  },
  components: { Description },
};
</script>

<style lang="scss">
.card {
  box-shadow: none;
  margin: 0;
  line-height: 21px;

  &__main {
    display: flex;
    justify-content: center;

    &_blue {
      background-color: $bcBlue;
      color: $colormainWhite;
    }
    &_grey {
      background-color: #eeeeee;
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
  &__item {
    flex: 0 0 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 25px;
    padding: 47px 15px 54px 15px;
    @include breakpoint(lg) {
      flex: 1 1 100%;
    }
    img {
      order: -1;
    }
  }
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
}
</style>
