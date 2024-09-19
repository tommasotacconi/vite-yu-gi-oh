<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
  <div class="card-wrapper">
    <img class="card" src="../assets/img/card-front.jpg" alt="dragon card front" />
    <img class="card card-back" src="../assets/img/card-back.jpg" alt="dragon card back" />
  </div>
</template>

<style lang="scss" scoped>
  //Card animation during loading. Credits: CHRISTOPHER KADE, link: https://christopherkade.com/posts/css-card-flip
  @keyframes cardFlip {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

.card-wrapper {
  position: relative;
  transform-style: preserve-3d;
  animation: cardFlip 3s ease-in-out infinite;
  width: 100px;
  height: 150px;
}

.card {
  position: absolute;
  backface-visibility: hidden;
  width: 100px;
  height: 150px;
}

.card-back {
  transform: rotateY(180deg);
}
</style>