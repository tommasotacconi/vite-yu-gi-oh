import { reactive } from 'vue'

export const store = reactive({
  isLoaded: false,
  cardsList: [],
  isSearching: false,
  selected: 'start',
})
