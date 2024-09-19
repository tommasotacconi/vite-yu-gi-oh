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
  // Credits: CHRISTOPHER KADE, link: https://christopherkade.com/posts/css-card-flip
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

.card-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
  }

.card-wrapper:before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3f3f3fe9;
}
</style>