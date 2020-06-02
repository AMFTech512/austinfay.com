<template>
  <footer id="default-footer">
      Copyright &copy; 2020 Austin Fay. All rights reserved.
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '@/assets/default-theme.scss';

#default-footer {
    text-align: center;
    padding: 20px;
    @include shadowed_border($primary);

    border-bottom: none;
    border-left: none;
    border-right: none;
}

</style>