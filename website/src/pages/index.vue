<template>
  <h1>Welcome to Austinfay.com</h1>
</template>

<script>
export default {
    head() {
        return {
            script: [
                { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
            ]
        }
    }
}
</script>

<style>

</style>