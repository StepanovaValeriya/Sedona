<template>
  <footer class="footer__container _container">
    <div class="footer__body">
      <div class="footer__contacts">
        <span>#visitsedona</span>
        <span>+7 800 555-86-28</span>
      </div>
      <ul class="footer__social social">
        <router-link
          :key="icon"
          v-for="icon in socialIcons"
          class="social__item"
          to="/"
          ><img
            @click="modal($event)"
            :src="getURLSocial(icon.url)"
            :alt="icon.alt"
          />
        </router-link>
      </ul>
      <div class="footer__info">
        <span>website by</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        { url: 'fb.png', alt: 'Facebook.com' },
        { url: 'twitter.png', alt: 'Twitter.com' },
        { url: 'youtube.png', alt: 'YouTube.com' },
      ],
      altSocial: '',
    };
  },
  methods: {
    getURLSocial(icon) {
      return new URL('../assets/img/footer/' + icon, import.meta.url).href;
    },
    modal(event) {
      this.altSocial = event.target.alt;
      this.$emit('modal', this.altSocial);
    },
  },
};
</script>

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
  img {
    cursor: pointer;
    &:hover {
      box-shadow: $shadow;
    }
  }
}
</style>
