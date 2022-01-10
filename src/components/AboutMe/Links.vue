<template>
  <section class="links">
    <h2>Links</h2>
    <ul class="presence">
      <li class="presence-item">
        <a href="https://github.com/WimBarelds" target="_blank">
          <img src="/presence/github.svg" alt="" />
          <span class="presence-linktext">Github</span>
        </a>
      </li>
      <li class="presence-item">
        <a href="https://codepen.io/wimbarelds/" target="_blank">
          <img src="/presence/codepen.png" alt="" />
          <span class="presence-linktext">Codepen</span>
        </a>
      </li>
      <li class="presence-item">
        <a href="https://www.linkedin.com/in/wimbarelds/" target="_blank">
          <img src="/presence/linkedin.svg" alt="" />
          <span class="presence-linktext">LinkedIn</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Links extends Vue {

}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul {
  display: flex;
  gap: 2em;
  padding: 0;
}
li {
  display: block;
}
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFF;
  text-decoration: none;
  gap: .5em;

  &:hover {
    text-decoration: underline;
  }

  img {
    width: 75px;
    aspect-ratio: 1;
  }
}
</style>
