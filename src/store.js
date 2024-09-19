import { reactive } from 'vue'

export const store = reactive({
  cardsList: [],
  isSearching: false,
  selected: 'start'
})
