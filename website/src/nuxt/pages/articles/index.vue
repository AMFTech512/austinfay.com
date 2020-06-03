<template>
  <div id="index-page">
      <h1>Articles</h1>
      <div>
        <p><nuxt-link class="blue-link" to="/">Home</nuxt-link></p>
        These are the articles on this website:
        <div v-for="page in pages" :key="page.slug" class="content-box-green">
          <h2><nuxt-link class="blue-link" :to="page.path">{{ page.title }}</nuxt-link></h2>
          <h5>{{ page.date }}</h5>
          <p>{{ page.description}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    
    const pages = await $content('articles')
      .only(['title', 'date', 'description', 'slug', 'path'])
      .sortBy('date', 'desc')
      .fetch();

    return { pages }
  }
}
</script>

<style lang="scss" scoped>

@import '@/assets/default-theme';

.content-box-green {
    width: 75%;
}

</style>
