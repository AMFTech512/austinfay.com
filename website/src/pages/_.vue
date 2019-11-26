<template>
    <div>
        <NavBar />
        {{ path }}
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar
  },
  async asyncData({ params }) {
      return {
          path: params.pathMatch
      };
  },
  validate({ params }) {
      return true;
  }
}
</script>

<style>

</style>