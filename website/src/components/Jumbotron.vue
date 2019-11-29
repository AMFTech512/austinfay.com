<template>
  <div class="jumbotron uk-cover-container">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 jumbotron-img">
                <img :src="data.imgURL" :alt="data.imgALT">
            </div>
            <div class="col-sm-6 jumbotron-txt">
                <h1>{{ data.tagline }}</h1>
            </div>
        </div>
    </div>
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

.jumbotron-img img{
    border-radius: 50%;
    max-width: 50%;
    margin: auto;
}

.jumbotron-img {
    text-align: center;
}

.jumbotron-txt {
    padding: 10%;
}

</style>