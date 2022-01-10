<template>
  <div class="about-me" :class="{ 'fullscreen-slides': fullScreenSlides, [curSlideName]: true }">
    <WhoAmI :class="{ 'slide-above': curSlide > 0, 'slide-below': curSlide < 0 }" />
    <Skills :class="{ 'slide-above': curSlide > 1, 'slide-below': curSlide < 1 }" />
    <Links :class="{ 'slide-above': curSlide > 2, 'slide-below': curSlide < 2 }" />
  </div>
</template>

<script lang="ts">
import { Component, InjectReactive, Vue, Watch } from 'vue-property-decorator';
import Links from '@/components/AboutMe/Links.vue';
import Skills from '@/components/AboutMe/Skills.vue';
import WhoAmI from '@/components/AboutMe/WhoAmI.vue';

@Component({
  components: {
    Links,
    Skills,
    WhoAmI,
  },
})
export default class AboutMe extends Vue {
  @InjectReactive() prefersReducedMotion!: boolean;
  smallScreen = false;
  slides: string[] = ['who-am-i', 'skills', 'links'];
  curSlide = 0;
  transitionActive = false;

  private _resizeObserver!: ResizeObserver;
  private _wheelListener!: (event: WheelEvent) => void;

  get fullScreenSlides(): boolean {
    return !this.smallScreen && !this.prefersReducedMotion;
  }

  get curSlideName(): string {
    return this.slides[this.curSlide];
  }

  created(): void {
    // resize observer
    this._resizeObserver = new ResizeObserver(() => {
      this.smallScreen = (window.innerWidth < 800 || window.innerHeight < 700);
    });
    this._resizeObserver.observe(document.body);

    // wheel
    // TODO: Fix for laptop
    this._wheelListener = (event: WheelEvent) => {
      if (this.transitionActive) return;
      if (event.deltaY > 0) {
        this.curSlide = Math.min(this.slides.length - 1, this.curSlide + 1);
        this.transitionActive = true;
        setTimeout(() => { this.transitionActive = false; }, 300);
      } else if (event.deltaY < 0) {
        this.curSlide = Math.max(0, this.curSlide - 1);
        this.transitionActive = true;
        setTimeout(() => { this.transitionActive = false; }, 300);
      }
    };
    document.body.addEventListener('wheel', this._wheelListener);
  }

  beforeDestroy(): void {
    this._resizeObserver.disconnect();
  }

  @Watch('fullScreenSlides')
  updateFullScreenSlides(): void {
    // Bla
  }
}
</script>

<style lang="scss" scoped>
.about-me {
  background-color: hsl(210, 72%, 27%);
  color: rgba(255, 255, 255, .9);

  --slide-who-am-i-color: #29485c;
  --slide-skills-color: #287166;
  --slide-links-color: #cb701a;
}

.fullscreen-slides {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transition: background-color .3s ease-in-out;

  &.who-am-i {
    background-color: var(--slide-who-am-i-color);
  }
  &.skills {
    background-color: var(--slide-skills-color);
  }
  &.links {
    background-color: var(--slide-links-color);
  }

  section {
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: transform .3s ease-in-out;
  }

  .slide-above {
    transform: translateY(-100vh);
  }
  .slide-below {
    transform: translateY(100vh);
  }
}

.about-me:not(.fullscreen-slides) {
  display: flex;
  flex-direction: column;
  width: 100%;

  section {
    padding: 3em 2em;
    width: 100%;
  }

  .who-am-i {
    background-color: var(--slide-who-am-i-color);
  }
  .skills {
    background-color: var(--slide-skills-color);
  }
  .links {
    background-color: var(--slide-links-color);
  }
}

</style>
