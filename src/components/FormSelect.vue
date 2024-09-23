<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    getCardsList() {
      axios.get(store.getApiUrl(undefined, undefined, 'num=50&offset=4000'))
        .then(response => {
          // handle success
          const time = setTimeout(function () {
            console.dir(response.data.data);
            store.isLoaded = true;
            store.cardsList = response.data.data;
          }, 3000);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    getAllCardsArchetypes() {
      axios.get(store.getApiUrl(undefined, 'archetypes.php', null))
        .then(response => {
          // handle success
          console.dir(response.data);
          store.allArchetypesList = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    apiSearchArchetype(searchedArchetype) {
      axios.get(store.getApiUrl(undefined, undefined, `archetype=${searchedArchetype}`))
        .then(response => {
          // handle success
          console.dir(response.data.data);
          store.isSearching = true;
          store.allApiCardsSelectedByArchetype = response.data.data;
          })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    updateShownCards() {this.apiSearchArchetype(store.selectedArchetype)},    
    manageStoreDataIsSearching() {
      console.log('managing...')
      if (store.selectedArchetype !== 'start') store.isSearching = true;
    },
    writeCorrespondances(archetype, objCorrespondances) {
      if (objCorrespondances[archetype]) return `(correspondances ${objCorrespondances[archetype]})`;
    }
  },
  created () {
    this.getCardsList();
    this.getAllCardsArchetypes();
  },
  computed: {
    // Generate the archetypes list with the only archetypes loaded in page
    cardsArchetypesList() {
      const archetypesList = [];
      for (let i = 0; i < store.cardsList.length; i++) {
          const archetype = store.cardsList[i].archetype;
          if (!archetypesList.includes(archetype)) archetypesList.push(archetype);
        }
      return archetypesList.sort();
    },
    loadedArchetypesCorrespondances() {
      // Generate an object with properties corresponding to the archetypes laoded
      // and related value equal to number of correspondances found
      let loadedArchetypesCorrespondancesCounter = {};
      for (let i = 0; i < this.cardsArchetypesList.length; i++) {
        const countedArchetype = this.cardsArchetypesList[i];
        const cardsOfSameArchetype = store.filterCardsForArchetype(countedArchetype);
        const archetypeCounter = {[countedArchetype]: cardsOfSameArchetype.length};
        loadedArchetypesCorrespondancesCounter = {...loadedArchetypesCorrespondancesCounter, ...archetypeCounter};
      }
      console.dir(loadedArchetypesCorrespondancesCounter);
      return loadedArchetypesCorrespondancesCounter;
    }
  },
}
</script>

<template>
  <div class="container-md d-flex justify-content-around" v-if="store.isLoaded">
    <!-- Select per ricercare l'archetipo -->
    <form action="" class="px-3 py-2 d-flex align-items-end">
      <div class="wrapper me-3">
        <label for="archetype">Filter card's archetype:</label>
        <select class="form-select form-select-sm mt-1" id="archetype" aria-label="archetype" v-model="store.selectedArchetype"
          @change="updateShownCards()" @blur="store.isSearching = false" @focus="manageStoreDataIsSearching()">
          <option value="start" disabled selected>Open this select menu</option>       
          <!-- Options generate sulla base del dato in ingresso tramite computed -->
          <option v-for="archetype in store.allArchetypesList" :value="archetype.archetype_name">
            {{ archetype.archetype_name }}
            {{ writeCorrespondances(archetype.archetype_name, loadedArchetypesCorrespondances) }}
          </option>
        </select>
      </div>
      <div class="wrapper">
        <select name="switch" id="archetype-switch" aria-label="archetype-switch" class="form-select form-select-sm mt-1" v-model="store.archetypeSwitch">
          <option value="show start" disabled selected>Decide what to see</option>
          <option value="show all">Show all archetype</option>
          <option value="Only in page">Only loaded archetype</option>
        </select>
      </div>
    </form>
  </div>
</template>

<style scoped>
  form {
    margin-top: 110px;
  }

  select {
    width: 250px;
    field-sizing: fixed;
  }

  select#archetype-switch {
    width: 180px;
  }
</style>