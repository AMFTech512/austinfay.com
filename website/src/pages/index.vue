<template>
  <div id="home-page">
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
import Greeting from '@/components/Greeting';

export default {
  name: 'HomePage',
  components: { Greeting },
  async asyncData({ $content, params }) {
    const page = await $content('special', 'home').fetch();
    return { page };
  }
}
</script>

<style lang="scss" scoped>

.nuxt-content {
  height: 100%;
}

</style>