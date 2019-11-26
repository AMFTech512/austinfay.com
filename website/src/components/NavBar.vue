<template>
    <vk-navbar class="site-nav">
        <vk-navbar-nav>
            <vk-navbar-nav-item v-for="link in links" :key="link.id" :title="link.label"></vk-navbar-nav-item>
        </vk-navbar-nav>
    </vk-navbar>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    label: 'Home',
                    id: 0,
                    destination: ''
                },
                {
                    label: 'Resume',
                    id: 1,
                    destination: ''
                },
                {
                    label: 'Portfolio',
                    id: 2,
                    destination: ''
                },
                {
                    label: 'Contact',
                    id: 3,
                    destination: ''
                },
                {
                    label: 'Donate',
                    id: 4,
                    destination: ''
                },
            ]
        }
    }
}
</script>

<style>

.site-nav {
    background: #231A31 !important;
}

.site-nav li a {
    color: white;
    text-transform: capitalize;
}

</style>