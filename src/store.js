import { reactive } from 'vue'

export const store = reactive({
  isLoaded: false,
  apiUrl: 'https://db.ygoprodeck.com/api/v7/',
  //Generate api url, default returns cards, limited in number and selected starting from an offset
  getApiUrl: function (baseApiUrl = store.apiUrl, completion = 'cardinfo.php', queryString) {
    let url = `${baseApiUrl}${completion}`;
    if (queryString !== null) url += `?${queryString}`;
    console.log(url)
    return url;
  }, 
  cardsList: [],
  isSearching: false,
  selectedArchetype: 'start',
  allArchetypesList: [],
  allApiCardsSelectedByArchetype: [],
  filterCardsForArchetype(archetype) {
    return store.cardsList.filter(card => card.archetype === archetype);
  },
  archetypeSwitch: 'Show all',
})
