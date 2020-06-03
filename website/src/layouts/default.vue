<template>
  <div id="default-layout">
    <NavBar />
    <nuxt class="current-page" />
    <Footer />
  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss">
@import '@/assets/default-theme.scss';

#default-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .current-page {
    flex-grow: 1;
  }
}

</style>