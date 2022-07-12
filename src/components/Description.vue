<template>
  <div class="card__main">
    <div class="card__item" v-for="item in descriptionItem" :key="item.id">
      <h2 class="card__title">{{ item.title }}</h2>
      <p class="card__text" v-html="item.text"></p>
      <img :src="getUrlImage(item.url)" :alt="item.alt" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'description',
  data() {
    return {
      descriptionItem: [
        {
          id: 1,
          title: 'Жилье',
          text: ' Рекомендуем пожить в настоящем <br/> мотеле, всё как в кино!',
          url: 'hotel.png',
          alt: 'hotel',
        },
        {
          id: 2,
          title: 'Еда',
          text: ' Всегда заказывайте фирменный бургер, <br/> вы не разочаруетесь!',
          url: 'food.png',
          alt: 'food',
        },
        {
          id: 3,
          title: 'Сувениры',
          text: '  Не только китайского, но и местного <br/> производства!',
          url: 'gifts.png',
          alt: 'gifts',
        },
      ],
    };
  },
  methods: {
    getUrlImage(img) {
      return new URL('../assets/img/features/' + img, import.meta.url).href;
    },
  },
};
</script>
