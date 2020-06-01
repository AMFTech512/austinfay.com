<template>
  <div id="index-page">
      <h1>Welcome to austinfay.com</h1>
      <div>
        These are the articles on this website:
        <div v-for="page in pages" :key="page.slug" class="index-blog-item">
          <h2><nuxt-link :to="`blog/${page.slug}`">{{ page.title }}</nuxt-link></h2>
          <h5>{{ page.date }}</h5>
          <p>{{ page.description}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pages = await $content('blog').only(['title', 'date', 'description', 'slug']).fetch();
    return { pages }
  }
}
</script>

<style>

  .index-blog-item {
    padding: 10px;
    border: 1px solid black;
    margin: 10px;
  }

</style>
