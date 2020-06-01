<template>
    <div>
      <div>
        <NavBar :data="navbar" v-editable="navbar"/>
      </div>

      <div>
        <component 
          v-for="block in blocks" 
          :key="block._uid" 
          :is="block.component"
          :data="block"
          v-editable="block"
        />
      </div>
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
    },
    navbar() {
      return this.$store.state.navbar.content;
    }
  },
  async fetch(context) {

    // determine our path (and account for the home page)
    let path = (context.params.pathMatch == '')? 'home' : context.params.pathMatch;

    // get the active story
    await context.store.dispatch('fetchStory', {
      context,
      path,
      callback(res) {
        context.store.commit('setActiveStory', res.data.story);
      }
    });

    // get the navbar 
    await context.store.dispatch('fetchStory', {
      context,
      path: "navbar",
      callback(res) {
        context.store.commit('setNavBar', res.data.story);
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