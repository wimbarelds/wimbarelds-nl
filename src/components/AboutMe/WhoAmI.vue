<template>
  <section class="who-am-i">
    <div class="section-content">
      <div class="summary">
        <img src="/photo.png" alt="" />
        <div class="summary-text">
          <h2>Who am I?</h2>
          <p>
            Hi, I'm Wim Barelds, I live in Groningen in the Netherlands and speak English and Dutch.
            I'm a well-rounded developer who's passionate about creating cool frontend stuff on the
            web;  a gamer who loves singleplayer, story-driven games; a nerd who's hooked on science
            fiction and fantasy audiobooks; and a maker with interests such as smart-tech, DIY, and
            3D printing.
          </p>
          <p><i>(This website however will mostly focus on the webdeveloper bit.)</i></p>
        </div>
      </div>
      <div class="traits">
        <h3>As a Developer, I am...</h3>
        <ul class="characteristics">
          <li class="characteristics-item">
            <img src="/traits/creative.png" alt="" />
            <span class="characteristics-text">Creative</span>
          </li>
          <li class="characteristics-item">
            <img src="/traits/versatile.png" alt="" />
            <span class="characteristics-text">Versatile</span>
          </li>
          <li class="characteristics-item">
            <img src="/traits/curious.png" alt="" />
            <span class="characteristics-text">Analytical</span>
          </li>
          <li class="characteristics-item">
            <img src="/traits/articulate.png" alt="" />
            <span class="characteristics-text">Articulate</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class WhoAmI extends Vue {

}
</script>

<style lang="scss" scoped>
.who-am-i {
  display: flex;
  flex-direction: column;
  align-items: center;

  .section-content {
    display: flex;
    flex-direction: column;
    gap: 2em;
    max-width: 1200px;
  }
}
.traits h3 {
  text-align: center;
}
.characteristics {
  display: flex;
  justify-content: space-between;
}
.characteristics-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em;
  font-family: var(--font-family-heading);
  font-size: 1.25rem;

  img {
    max-width: min(100px, 10vw);
    aspect-ratio: 1 / 1;
  }
}

.summary {
  display: flex;
  gap: 1em;
  align-items: center;
  margin-bottom: 1em;

  img {
    border-radius: 50%;
    border: solid rgba(255, 255, 255, .25) 1px;
  }

  .summary-text {
    max-width: 60em;
  }
}
</style>
