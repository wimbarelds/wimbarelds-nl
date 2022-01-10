<template>
  <section class="skills">
    <h2>Things I like to work with</h2>
    <ul class="primary-skills">
      <li><img src="/logos/javascript-plain.svg" alt="" /><span class="skill-text">Javascript</span></li>
      <li><img src="/logos/typescript-plain.svg" alt="" /><span class="skill-text">Typescript</span></li>
      <li><img src="/logos/html5-plain.svg" alt="" /><span class="skill-text">HTML</span></li>
      <li><img src="/logos/css3-plain.svg" alt="" /><span class="skill-text">CSS</span></li>
      <li><img src="/logos/vuejs-plain.svg" alt="" /><span class="skill-text">VueJS</span></li>
      <li><img src="/logos/angular-plain.svg" alt="" /><span class="skill-text">Angular</span></li>
      <li><img src="/logos/webpack-plain.svg" alt="" /><span class="skill-text">Webpack</span></li>
      <li><img src="/logos/nodejs-plain.svg" alt="" /><span class="skill-text">NodeJS</span></li>
    </ul>

    <h3>However...</h3>
    <div class="seconary-skills-wrapper">
      <p>
        Though the above are all things I have the most fun working with,<br />
        I also have experience and no problem working with things like...
      </p>
      <ul class="seconary-skills">
        <li><img src="/logos/csharp-plain.svg" alt="" /><span class="alt-skill-text">C#</span></li>
        <li><img src="/logos/java-plain.svg" alt="" /><span class="alt-skill-text">Java</span></li>
        <li><img src="/logos/php-plain.svg" alt="" /><span class="alt-skill-text">PHP</span></li>
        <li><img src="/logos/sql-plain.svg" alt="" /><span class="alt-skill-text">SQL</span></li>
        <li><img src="/logos/android-plain.svg" alt="" /><span class="alt-skill-text">Android</span></li>
        <li><img src="/logos/jquery-plain.svg" alt="" /><span class="alt-skill-text">jQuery</span></li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Skills extends Vue {}
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  text-align: center;
  padding: 0;
  margin: 1em 0;
}

.primary-skills {
  max-width: calc(calc(4 * 100px) + calc(3 * 2em));
  margin-bottom: 2em;

  li {
    width: 100px;
  }
}

.seconary-skills-wrapper {
  margin-top: .5em;
}
p {
  text-align: center;
}

.seconary-skills {
  li {
    width: 40px;
    font-size: 80%;
  }
}

img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5em;
}
</style>
