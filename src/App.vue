<script>
import AppHeader from './components/AppHeader.vue';
import AppMainContent from './components/AppMainContent.vue';
import FormSelect from './components/FormSelect.vue'
import { store } from './store.js'


export default {
  data() {
    return {
      store,
    }
  },
  components: {
    FormSelect,
    AppHeader,
    AppMainContent
  }
}
</script>

<template>
  <AppHeader :class="{ 'app-header': !store.isLoaded }"/>
  <FormSelect />
  <AppMainContent />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss';
@use './style/general.scss';

.app-header::before {
  content: '';
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  background-image: linear-gradient(#2d2d2de0 30%, #605f5f86 50%,#2d2d2de0 70%);
  background-position: center;
  z-index: 1;
  filter: drop-shadow(0 0 50rem rgb(236, 191, 43));
}
</style>
