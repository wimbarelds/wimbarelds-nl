<template>
  <div class="article">
    Hi
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
  created(): void {
    console.log(this.$route.params);
  }
}
</script>
