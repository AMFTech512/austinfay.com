export default {
    async fetchStories(useless, context) {
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
        // Load the JSON from the API
        await context.app.$storyapi.get('cdn/stories', {
            version: version,
            cv: Math.floor(Date.now() / 60000)*60000
        }).then((res) => {
            context.store.commit('setStories', res.data.stories);
        }).catch((res) => {
            context.error({ statusCode: 500, message: res })
        })
    }
};