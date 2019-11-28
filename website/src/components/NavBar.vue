<template>
    <vk-navbar class="site-nav">
        <vk-navbar-nav>
            <nuxt-link 
                v-for="story in stories" 
                :key="story.id"
                :to="`/${story.slug}`"
                class="vk-navbar-item">
                {{ story.name }}
            </nuxt-link>
        </vk-navbar-nav>
    </vk-navbar>
</template>

<script>
export default {
    props: ['stories']
}
</script>

<style>

.site-nav {
    background: #231A31 !important;
}

.site-nav a {
    color: white;
    text-transform: capitalize;
    text-decoration: none;
    padding: 20px;
}

.site-nav a:hover {
    color: grey;
}

</style>