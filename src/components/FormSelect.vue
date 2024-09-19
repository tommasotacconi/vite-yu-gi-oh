<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
  data() {
    return {
      store,
      apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=60',
      isLoaded: false,
    }
  },
  methods: {
    getCardsList () {
      axios.get(this.apiUrl)
        .then(response => {
          // handle success
          console.dir(response.data.data);
          this.isLoaded = true;
          store.cardsList = response.data.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  },
  created () {
    this.getCardsList();
  },
  computed: {
    cardsArchetypesList() {
      const archetypesList = [];
      for (let i = 0; i < store.cardsList.length; i++) {
          const archetype = store.cardsList[i].archetype;
          if (!archetypesList.includes(archetype)) archetypesList.push(archetype);
        }
      return archetypesList.sort();
    }
  } 
}
</script>

<template>
  <div class="container-md d-flex justify-content-around" v-if="this.isLoaded">
    <!-- Select per ricercare il genere -->
    <form action="" class="px-3 py-2">
      <label for="archetype">Filter archetype:</label>
      <select class="form-select form-select-sm mt-1" id="archetype" aria-label="archetype" v-model="store.selected"
      @change="store.isSearching = true">
        <option disabled selected>Open this select menu</option>
        <!-- Option generate sulla base del dato in ingresso tramite computed -->
        <option v-for="archetype in cardsArchetypesList" :value="archetype">{{ archetype }}</option>
      </select>
    </form>
  </div>
</template>

<style scoped>
  form {
    margin-top: 110px;
  }

  select {
    width: 250px;
    field-sizing: fixed                             
  }
</style>