<template>
  <div id="blog-page">
      <nuxt-link to="/">Home</nuxt-link>
      <h1>{{ page.title }}</h1>
      <h4>{{ page.date }}</h4>
      <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const page = await $content('blog', params.slug).fetch();
        return { page }
  }
}
</script>

<style>

</style>