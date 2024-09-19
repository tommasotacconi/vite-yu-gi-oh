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
  <!-- Single card -->
  <!-- <div class="card">
    <div class="card-img">
      <img class="w-100" :src="card.card_images[0].image_url" alt="">
    </div>
    <div class="card-title">
      <span class="playing-card-type">{{ card.name }}</span>
    </div>
    <div class="card-archetype mx-2 my-1 ">
      <span class="playing-card-archetype">{{ card.archetype }}</span>
    </div>
  </div> -->
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