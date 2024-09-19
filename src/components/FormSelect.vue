<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
  data() {
    return {
      store,
      apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=60',
    }
  },
  methods: {
    getCardsList () {
      axios.get(this.apiUrl)
        .then(response => {
          // handle success
          const time = setTimeout(function() {console.dir(response.data.data);
          store.isLoaded = true;
          store.cardsList = response.data.data;}, 3000);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    manageIsSearching() {
      console.log('managing...')
      if (store.selected !== 'start') store.isSearching = true;
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
    },
  } 
}
</script>

<template>
  <div class="container-md d-flex justify-content-around" v-if="store.isLoaded">
    <!-- Select per ricercare l'archetipo -->
    <form action="" class="px-3 py-2">
      <label for="archetype">Filter card's archetype:</label>
      <select class="form-select form-select-sm mt-1" id="archetype" aria-label="archetype" v-model="store.selected"
        @change="store.isSearching = true" @blur="store.isSearching = false" @focus="manageIsSearching()">
        <option value="" selected>Open this select menu</option>       
        <!-- Options generate sulla base del dato in ingresso tramite computed -->
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