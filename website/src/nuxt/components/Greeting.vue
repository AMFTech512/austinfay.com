<template>
  <div class="greeting-comp">
      <div class="jumbo-msg">
          <!-- <h1>Welcome to <span style="color: #1CABF9; text-shadow: 0px 0px 10px #1CABF9">0xAF</span>!</h1> -->
          <h1 v-html="jumbo_msg"></h1>
      </div>
      <div class="long-msg">
          <p v-html="long_msg"></p>
      </div>
      <div class="cta">
          <a :href="cta_href">{{ cta_txt }}</a>
      </div>
      <div class="scroll-down-desc">
          <p>{{ scroll_txt }}</p>
      </div>
      <div class="scroll-down">
          <img src="@/static/site-assets/components/greeting/scroll-triangle.svg" alt="Scroll Down">
      </div>
  </div>
</template>

<script>
export default {
    name: 'GreetingComponent',
    props: [
        'jumbo_msg',
        'long_msg',
        'cta_txt',
        'cta_href',
        'scroll_txt'
    ]
}
</script>

<style lang="scss" scoped>
@import '@/assets/default-theme.scss';

.greeting-comp {
    background-image: url('/site-assets/components/greeting/greeting-bg.svg');
    background-position: center;
    background-size: 120%;
    // height: 100%;
    height: auto;
    min-height: 95vh;
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

    @media only screen and (max-width: 768px) {
        .jumbo-msg {
            font-size: 12pt;
            margin: 10px;
        }

        .long-msg {
            // font-size: 10pt;
            width: 90%;
        }
    }
}

</style>