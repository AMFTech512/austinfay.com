<template>
<div class="desc-card">
<div 
    class="row"
    :style="{background: data.backgroundColor}">
        <div class="col-sm-6 topic">
            <h2>{{ data.topic }}</h2>
        </div>
        <div class="col-sm-6" v-html="descMd"></div>
</div>
</div>
</template>

<script>
import marked from 'marked';

export default {
    name: 'DescCard',
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
    margin: 50px 100px 50px 100px;
    -webkit-box-shadow: 0px 0px 6px 3px rgba(191,191,191,1);
    -moz-box-shadow: 0px 0px 6px 3px rgba(191,191,191,1);
    box-shadow: 0px 0px 6px 3px rgba(191,191,191,1);
}

.desc-card div {
    padding: 5%;
    align-items: center;
}

.desc-card .topic {
    text-align: center;
}

</style>