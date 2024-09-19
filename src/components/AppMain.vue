<script>
import { store } from '../store.js'
import Card from './Card.vue'

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
  },
  computed: {
    // Lista di cards filtrate sulla base della select
    cardsSelected: function () {
      if (!store.isSearching) return store.cardsList;
      return store.cardsList.filter(card => card.archetype === store.selected)
    },
    // Un contatore di cards
    cardsFoundCounter () {
      return !store.isSearching ? store.cardsList.length : this.cardsSelected.length;
    },
  },
  components: {
    Card,
  }
}
</script>

<template>
  <main class="">
    <div class="card-container container-md">
      <!-- Contatore card -->
      <div class="counter-box row d-block p-4 bg-dark">
        <span v-show="store.isSearching">Cards found <span class="counter-pillow">{{ cardsFoundCounter }}</span></span> 
      </div>
      <!-- Row di cols -->
      <div class="row gx-3 mt-5">
        <!-- Cols -->
        <div class="col-2 card-col" :class="{ 'offset-1': index % 5 === 0 }" v-for="(card, index) in cardsSelected" :key="index">
          <Card :card/>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    margin: 30px 150px 10px;
    background-color: #ffae4b;
  }

  .counter-box {
    color: #ffae4b;
    height: 4.5rem;
  }

  .counter-pillow {
    padding: 3px 10px;
    margin-left: 5px;
    background-color: #ffae4b;
    color: rgb(var(--bs-dark-rgb));
    border-radius: 15px;
  }

  .card-col {
    aspect-ratio: 4/9;
  }
</style>