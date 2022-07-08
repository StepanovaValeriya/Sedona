<template>
  <div>
    <Transition name="modal">
      <div v-if="modelValue" class="modal">
        <div class="modal__wrapper">
          <div class="modal__window footer__leave">
            <div class="footer__leave__window">
              <p>
                Вы уверены, что хотите покинуть сайт и перейти на
                {{ altSocial }}?
              </p>
              <div class="footer__leave__window__agree button">
                <button class="button_big-dark">
                  <a @click="$emit('close')" class="button-select" href="#"
                    >Подтвердить</a
                  >
                </button>
              </div>
              <div
                @click="$emit('close')"
                class="footer__leave__window__close"
                type="submit"
              >
                <img src="../assets/img/footer/close.png" alt="close" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['modelValue', 'altSocial'],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 9998;
  top: 30%;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: $bcBlue;
  display: table;
  transition: opacity 0.3s ease;

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__window {
  }
}
.footer {
  &__leave {
    top: -70%;
    &__window {
      padding: 40px 50px;
      background-color: var(--section-color);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        font-size: 20px;
        font-weight: 600;
        color: $colormainBig;
        margin: 20px 0 30px 0;
      }
      &__close {
        position: absolute;
        top: 5%;
        right: 20px;
        cursor: pointer;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
.button {
  &_big-dark {
    @include button;
    background-color: $bcButtonDark;
    padding: 20px;
    font-size: 20px;
    &:hover {
      background-color: $buttonHoverDark;
    }
    &:active {
      @include active;
      background-color: $buttonActiveDark;
    }
  }
}
</style>
