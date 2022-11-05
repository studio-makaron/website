<template>
  <div class="navigation-die__scene">
    <div class="navigation-die">
      <div
        :class="`navigation-die__face navigation-die__face--${i}`"
        v-for="i in [1, 2, 3, 4, 5, 6]"
        :key="i"
      >
        <div class="navigation-die__face-content">
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { multiLerp } from '@/utils';

export default defineComponent({
  props: {
    slide: {
      type: Number,
      required: true,
    },
  },
  setup: (props) => ({
    rotateX: computed(() => `${multiLerp([0, 90, 90, -90, -90, -180], props.slide)}deg`),
    rotateZ: computed(() => `${multiLerp([0, 0, -90, -90, 0, 0], props.slide)}deg`),
  }),
});
</script>

<style lang="scss">
@import "src/styles/constants";

$half-width: 32px;

.navigation-die__scene {
  perspective: $half-width * 6;
  width: $half-width * 2;
  height: $half-width * 2;
  @include filter-shadow;
  pointer-events: none;
  user-select: none;

  .navigation-die {
    width: $half-width*2;
    height: $half-width*2;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-$half-width) rotateX(v-bind(rotateX)) rotateZ(v-bind(rotateZ));

    .navigation-die__face {
      position: absolute;
      width: $half-width*2;
      height: $half-width*2;
      box-sizing: border-box;
      background: #050505;
      padding: 6px;

      .navigation-die__face-content {
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, $background-light 0%, #282A3E 100%);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 3em;
        color: $primary-light;
      }
    }

    .navigation-die__face--1  {
      transform: rotateY(0deg) translateZ($half-width);
    }
    .navigation-die__face--4  {
      transform: rotateY(90deg) translateZ($half-width) rotateZ(90deg);
    }
    .navigation-die__face--6 {
      transform: rotateY(180deg) translateZ($half-width) rotateZ(180deg);
    }
    .navigation-die__face--3 {
      transform: rotateY(-90deg) translateZ($half-width) rotateZ(90deg);
    }
    .navigation-die__face--5    { transform: rotateX( 90deg) translateZ($half-width); }
    .navigation-die__face--2 { transform: rotateX(-90deg) translateZ($half-width); }
  }
}
</style>
