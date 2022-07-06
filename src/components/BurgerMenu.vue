<template>
  <div>
    <a
      class="dropdown-trigger btn"
      href="#"
      data-target="dropdown1"
      ref="dropdown"
      ><i class="material-icons">dehaze</i></a
    >

    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">Информация</a></li>
      <li><a href="#!">Фото и видео</a></li>
      <li><a href="#!">Карта штата</a></li>
      <li><a href="#!">Гостиницы</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'burgerMenu',
  data() {
    return {};
  },
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      coverTrigger: false,
      constrainWidth: false,
    });
  },
};
</script>
