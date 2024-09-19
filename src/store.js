import { reactive } from 'vue'

export const store = reactive({
  cardsList: [],
  isSearching: false,
  selected: 'Open this select menu'
})
