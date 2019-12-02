<template>
    <nav class="navbar navbar-expand navbar-light bg-light">
        <ul class="navbar-nav mr-auto">
            <li
            v-for="story in stories" 
            :key="story.id"
            class="nav-item">
                <nuxt-link class="nav-link" :to="`/${story.slug}`">{{ story.name }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['stories']
}
</script>

<style>

</style>