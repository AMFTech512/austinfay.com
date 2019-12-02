<template>
    <div>
        <NavBar :stories="$store.state.stories" />
        <component 
          v-for="block in blocks" 
          :key="block._uid" 
          :is="block.component"
          :data="block"
          v-editable="block"
        />
    </div>
</template>

<script>
import components from '@/components/index'
import storyblokLivePreview from '@/middleware/storyblokLivePreview'

export default {
  components,
  mixins: [
    storyblokLivePreview
  ],
  computed: {
    blocks() {
      return this.$store.state.activeStory.content.body;
    }
  },
  async fetch(context) {
    await context.store.dispatch('fetchStories', context);
    let stories = context.store.state.stories;

    // check to see if we're on the home page
    if(context.params.pathMatch == '') {
      context.store.commit('setActiveStory', stories[0]);
      return;
    }

    // check to see if the page requested actually exists
    if(!stories.some(story => {

        if(story.slug == context.params.pathMatch) {
          context.store.commit('setActiveStory', story);
          return true
        }

        return false;

      })) {

      context.error({statusCode: 404, message: 'Not Found'});

    }
        
  },
  asyncData(context) {
    return {
        path: context.params.pathMatch
    };
  }
}
</script>

<style>

</style>