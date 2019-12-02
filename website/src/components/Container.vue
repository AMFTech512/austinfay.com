<template>
    <div class="container">
        <component 
          v-for="child in data.children" 
          :key="child._uid" 
          :is="child.component"
          :data="child"
          v-editable="child" />
    </div>
</template>

<script>
import components from '@/components/index'

export default {
    components,
    name: 'Container',
    props: ['data']
}
</script>

<style>

</style>
