<template>
  <div>
    <!-- <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div> -->

    <router-view />
  </div>
</template>

<style lang="scss">
$size-5: clamp(3.27rem, 2.75rem + 2.56vw, 4.58rem);
$size-4: clamp(2.72rem, 2.36rem + 1.83vw, 3.66rem);
$size-3: clamp(2.27rem, 2.01rem + 1.29vw, 2.93rem);
$size-2: clamp(1.89rem, 1.71rem + 0.89vw, 2.34rem);
$size-1: clamp(1.58rem, 1.46rem + 0.59vw, 1.88rem);
$size-0: clamp(1.31rem, 1.24rem + 0.37vw, 1.5rem);
$size--1: clamp(1.09rem, 1.05rem + 0.21vw, 1.2rem);
$size--2: clamp(0.91rem, 0.89rem + 0.1vw, 0.96rem);

body {
  font-size: $size--2;
}

p {
  font-size: $size--1;
}

h1 {
  font-size: $size-3 !important;
}

h2 {
  font-size: $size-2 !important;
}

h3 {
  font-size: $size-1 !important;
}
</style>
