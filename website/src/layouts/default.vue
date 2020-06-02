<template>
  <div id="default-layout">
    <NavBar />
    <nuxt class="current-page" />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    Footer
  }
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