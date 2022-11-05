<template>
  <slide1 />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Slide1 from '@/components/Slide1.vue';

export default defineComponent({
  name: 'App',
  components: {
    Slide1,
  },
});
</script>

<style lang="scss">
@import "styles/constants";

body {
  background: linear-gradient($background-light, $background);
  margin: 0;

  .slide {
    height: 100vh;
  }
}
</style>
