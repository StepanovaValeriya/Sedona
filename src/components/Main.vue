<template>
  <div class="page__main-block main-block">
    <div class="main-block__container _container">
      <div class="main-block__image _ibg">
        <img src="../assets/img/main/background photo.jpg" alt="cover" />
      </div>
      <div class="main-block__content">
        <img
          class="image_1"
          src="../assets//img/main/welcome.png"
          alt="welcome"
        />
        <img
          class="image_2"
          src="../assets/img/main/gorgeous.png"
          alt="gorgeous"
        />
        <img
          class="image_3"
          src="../assets/img//main/sedona.png"
          alt="sedona"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-block {
  &__container {
    padding: 0;
  }
  &__image {
    display: block;
    padding: 0 0 50% 0;
  }
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      position: absolute;

      object-fit: cover;
    }
    // .image_1 {
    //   position: absolute;
    //   top: 10%;
    // }
    // .image_2 {
    //   position: absolute;
    //   top: 15%;
    // }
    // .image_3 {
    //   position: absolute;
    //   top: 30%;
    // }
  }
}
</style>
