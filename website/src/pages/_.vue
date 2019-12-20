<template>
    <div>
        <NavBar :stories="$store.state.navbar_links" />
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

    // determine our path (and account for the home page)
    let path = (context.params.pathMatch == '')? 'navbar/home' : context.params.pathMatch;
    // console.log(`Path: ${path}`);

    // get the navbar
    await context.store.dispatch('fetchFolder', {
      context,
      path: 'navbar',
      callback: (res) => {
        context.store.commit('setNavBar', res.data.links);
      }
    });

    // get the active story
    await context.store.dispatch('fetchStory', {
      context,
      path,
      callback(res) {
        context.store.commit('setActiveStory', res.data.story);
      }
    });

    // context.error({statusCode: 404, message: 'Not Found'});
        
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