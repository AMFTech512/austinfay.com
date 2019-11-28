<template>
  <vk-card 
    class="uk-width-1-2@m desc-card"
    :style="{background: data.backgroundColor}">
  <vk-card-title>{{ data.topic }}</vk-card-title>
  <p v-html="descMd"></p>
</vk-card>

</template>

<script>
import marked from 'marked';

export default {
    props: [
        'data'
    ],
    computed: {
        descMd() {
            return marked(this.data.description);
        }
    }
}
</script>

<style>

.desc-card {
    margin: 50px auto 50px auto;
}

</style>