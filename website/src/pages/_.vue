<template>
    <div>
        <NavBar :stories="$store.state.stories"/>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar
  },
  async fetch(context) {
    await context.store.dispatch('fetchStories', context);
    if(!context.store.state.stories.some(story => story.slug == context.params.pathMatch ) &&
    context.params.pathMatch != '')
        context.error({statusCode: 404, message: 'Not Found'});
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