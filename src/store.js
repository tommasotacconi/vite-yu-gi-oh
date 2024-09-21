import { reactive } from 'vue'

export const store = reactive({
  isLoaded: false,
  cardsList: [],
  isSearching: false,
  selected: 'start',
  allArchetypesList: [],
  filterCardsForArchetype(archetype) {
    return store.cardsList.filter(card => card.archetype === archetype);
  },
})
