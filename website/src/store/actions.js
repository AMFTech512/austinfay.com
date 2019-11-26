export default {
    async fetchStories(useless, context) {
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
        // Load the JSON from the API
        await context.app.$storyapi.get('cdn/stories', {
            version: version
        }).then((res) => {
            // console.log("Got the stories");
            context.store.commit('setStories', res.data.stories);
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    }
};