<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import FormSelect from './components/FormSelect.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    FormSelect,
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <AppHeader />
  <FormSelect />
  <AppMain />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss';
@use './style/general.scss';

</style>
