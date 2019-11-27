<template>
    <vk-navbar class="site-nav">
        <vk-navbar-nav>
            <vk-navbar-nav-item 
                v-for="story in stories" 
                :key="story.id" 
                :title="story.name"
                :href="`/${story.slug}`">
            </vk-navbar-nav-item>
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

.site-nav li a {
    color: white;
    text-transform: capitalize;
}

</style>