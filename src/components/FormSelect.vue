<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
  data() {
    return {
      store,
      apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=60&offset=4300',
      apiUrlAllArchetypes: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
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
    getAllCardsArchetypes() {
      axios.get(this.apiUrlAllArchetypes)
        .then(response => {
          // handle success
          const time = setTimeout(function() {console.dir(response.data);
          store.isLoaded = true;
          store.allArchetypesList = response.data;}, 3000);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      },    
    manageStoreDataIsSearching() {
      console.log('managing...')
      if (store.selected !== 'start') store.isSearching = true;
    }
  },
  created () {
    this.getCardsList();
    this.getAllCardsArchetypes();
  },
  computed: {
    /* cardsArchetypesList() {
      const archetypesList = [];
      for (let i = 0; i < store.cardsList.length; i++) {
          const archetype = store.cardsList[i].archetype;
          if (!archetypesList.includes(archetype)) archetypesList.push(archetype);
        }
      return archetypesList.sort();
    }, */
  } 
}
</script>

<template>
  <div class="container-md d-flex justify-content-around" v-if="store.isLoaded">
    <!-- Select per ricercare l'archetipo -->
    <form action="" class="px-3 py-2">
      <label for="archetype">Filter card's archetype:</label>
      <select class="form-select form-select-sm mt-1" id="archetype" aria-label="archetype" v-model="store.selected"
        @change="store.isSearching = true" @blur="store.isSearching = false" @focus="manageStoreDataIsSearching()">
        <option value="" selected>Open this select menu</option>       
        <!-- Options generate sulla base del dato in ingresso tramite computed -->
        <option v-for="archetype in store.allArchetypesList" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
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