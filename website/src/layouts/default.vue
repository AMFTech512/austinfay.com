<template>
    <div>
        <NavBar :stories="$store.state.stories" />
        <nuxt />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>