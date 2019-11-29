<template>
<div class="container desc-card">
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
    -webkit-box-shadow: 6px 6px 5px -1px rgba(204,204,204,1);
    -moz-box-shadow: 6px 6px 5px -1px rgba(204,204,204,1);
    box-shadow: 6px 6px 5px -1px rgba(204,204,204,1);
}

.desc-card div {
    padding: 25px;
}

.desc-card .topic {
    text-align: center;
    padding: 10%;
}

</style>