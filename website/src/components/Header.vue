<template>
    <h1 :style="data.css">{{ data.text }}</h1>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    props: ['data']
}
</script>

<style>

</style>
