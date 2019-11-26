<template>
    <vk-navbar class="site-nav">
        <vk-navbar-nav>
            <vk-navbar-nav-item 
                v-for="story in stories" 
                :key="story.id" 
                :title="story.name">
            </vk-navbar-nav-item>
        </vk-navbar-nav>
    </vk-navbar>
</template>

<script>
import storyblokLivePreview from '@/middleware/storyblokLivePreview'

export default {
    mixins: [storyblokLivePreview],
    props: ['stories'],
    mounted() {
        console.log(this.stories);
    }
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