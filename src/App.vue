<template>
  <div class="app" ref="app">
    <div class="app-nav">
      <navigation-die :slide="slide" />
    </div>
    <slide1 />
    <slide1 />
    <slide1 />
    <slide1 />
    <slide1 />
    <slide1 />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref,
} from 'vue';
import Slide1 from '@/components/Slide1.vue';
import NavigationDie from '@/components/NavigationDie.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigationDie,
    Slide1,
  },
  setup: () => {
    const app = ref<HTMLDivElement>();
    const slide = ref(0);
    onMounted(() => {
      const updateSlide = () => {
        if (!app.value) return;
        slide.value = (app.value.scrollTop / (app.value.scrollHeight - app.value.clientHeight)) * 5;
      };
      app.value?.addEventListener('scroll', updateSlide);
      updateSlide();
    });

    return {
      app,
      slide,
    };
  },
});
</script>

<style lang="scss">
@import "styles/constants";

body {
  background: linear-gradient($background-light, $background);
  margin: 0;

  .app {
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }

  .slide {
    height: 100vh;
    scroll-snap-align: center;
  }

  .app-nav {
    position: fixed;
    bottom: 12px;
    right: 12px;
  }
}
</style>
