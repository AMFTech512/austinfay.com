<template>
  <div class="greeting-comp">
      <div class="jumbo-msg">
          <h1>Welcome to <span style="color: #1CABF9; text-shadow: 0px 0px 10px #1CABF9">0xAF</span>!</h1>
      </div>
      <div class="long-msg">
          <p>Are you interested in computers? Do you like to code? Do you like to hack? Well, you've come to the right place. This website is all about computer science. There are articles and videos for you to watch. Feel free to browse all the content on this site!</p>
      </div>
      <div class="cta">
          <a href="">YouTube Channel</a>
      </div>
      <div class="scroll-down-desc">
          <p>Featured Episode</p>
      </div>
      <div class="scroll-down">
          <img src="@/static/site-assets/components/greeting/scroll-triangle.svg" alt="Scroll Down">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/default-theme.scss';

.greeting-comp {
    background-image: url('/site-assets/components/greeting/greeting-bg.svg');
    background-position: center;
    background-size: 120%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .jumbo-msg {
        font-size: 36pt;
        margin: 0;
    }

    .long-msg {
        width: 50%;
        min-width: 350px;
        margin: 0 auto;
        padding: 0 10px;
    }

    .cta {
        margin: 20px;

        a {
            border: 2px solid $secondary;
            background: $secondary;
            padding: 10px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 12pt;
            font-weight: bold;
            text-decoration: none;
            color: black;
        }

        a:hover {
            @include shadowed_border($secondary);
        }
    }

    .scroll-down-desc {
        @include text-glow($primary);
    }
}

</style>