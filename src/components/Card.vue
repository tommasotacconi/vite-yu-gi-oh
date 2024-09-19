<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <!-- Card Bootstrap -->
  <div class="card">
    <img :src="card.card_images[0].image_url" class="card-img-top" alt="card.name">
    <div class="card-body m-0 p-2">
      <h5 class="card-title playing-card">{{ card.name }}</h5>
      <p class="playing-card-archetipe">{{ card.archetype }}</p>
    </div>
  </div>
</template>

<style scoped>
  .card {
    height: 90%;
  }
</style>