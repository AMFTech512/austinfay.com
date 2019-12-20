function throwError(error, context) {
    context.error({ statusCode: 500, message: error });
}

function getCV() {
    return Math.floor(Date.now() / 60000)*60000;
}

export default {
    async fetchFolder(useless, params) {
        let version = params.context.query._storyblok || params.context.isDev ? 'draft' : 'published'
        // Load the JSON from the API
        await params.context.app.$storyapi.get(`cdn/links`, {
            version: version,
            cv: getCV(),
            starts_with: params.path
        }).then(params.callback).catch(error => throwError(error, params.context));
    },
    async fetchStory(useless, params) {
        let version = params.context.query._storyblok || params.context.isDev ? 'draft' : 'published'
        // Load the JSON from the API
        await params.context.app.$storyapi.get(`cdn/stories/${params.path}`, {
            version: version,
            cv: getCV()
        }).then(params.callback).catch(error => throwError(error, params.context));
    }
};