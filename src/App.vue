<template>
  <div class="site" :class="{ 'prefers-reduced-motion': prefersReducedMotion }">
    <!-- <div id="sidepanel">
      <router-link to="/">About Me</router-link>
    </div> -->
    <main>
      <router-view :class="{ 'prefers-reduced-motion': prefersReducedMotion }" />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, ProvideReactive, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  @ProvideReactive() prefersReducedMotion = false;

  created(): void {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.prefersReducedMotion = mediaQuery.matches;
  }
}
</script>

<style lang="scss">
  @import './style/global';
</style>

<style lang="scss" scoped>
.site {
  display: flex;
  width: 100%;
}

main {
  flex: 1;
}
</style>
