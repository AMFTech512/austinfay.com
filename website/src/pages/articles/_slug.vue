<template>
  <div id="blog-page">
      <h1>{{ page.title }}</h1>
      <h5>{{ page.date }}</h5>
      <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const page = await $content('articles', params.slug).fetch();
        return { page }
  }
}
</script>

<style lang="scss" scoped>

@import '@/assets/default-theme';

h1 {
  color: $primary;
}

h5 {
  color: $tertiary;
}

</style>