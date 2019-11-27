<template>
  <div class="jumbotron uk-cover-container">
    <vk-grid class="uk-child-width-expand@s uk-text-center">
        <div class="uk-width-1-3@m jumbotron-img">
            <img :src="data.imgURL" :alt="data.imgALT">
        </div>
        <div class="uk-width-expand@m jumbotron-primary">
            <h1>{{ data.tagline }}</h1>
        </div>
    </vk-grid>
      <!-- <h1>I take up the whole fucking page.</h1> -->
  </div>
</template>

<script>
export default {
    props: [
        'data'
    ]
}
</script>

<style>

.jumbotron {
    background: #E42F45;
}

.jumbotron-img {
    /* padding: 100px; */
    margin: 100px;
}

.jumbotron-primary {
    vertical-align: middle;
    position: relative;
}

.jumbotron-primary h1 {
    font-size: 56pt;
    text-align: left;
    color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.jumbotron img {
    border-radius: 50%;
    max-width: 300px;
    max-height: 300px;
}

</style>