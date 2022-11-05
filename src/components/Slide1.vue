<template>
  <div class="slide slide-1">
    <img src="/logo.png" alt="Studio Makaron" class="slide-1--logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Slide1',
  setup: () => ({}),
});
</script>

<style lang="scss">
@import "../styles/constants";

.slide-1 {
  display: flex;
  align-items: center;
  justify-content: center;

  .slide-1--logo {
    max-height: 50vh;
    max-width: 50vw;
    filter: drop-shadow(1vw 1vw 0 rgba(0, 0, 0, 0.4));
  }
}
</style>
