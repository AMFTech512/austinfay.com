<template>
  <nav id="default-navbar">
      <img class="site-logo" src="@/static/site-assets/global/af-logo-prod.svg" alt="AF Logo">
      <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/articles">Articles</nuxt-link></li>
          <li><nuxt-link to="/series">Series</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/support">Support</nuxt-link></li>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/default-theme.scss';

    #default-navbar {
        
        @include shadowed_border($primary);
        border-top: none;
        border-left: none;
        border-right: none;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        ul {
            list-style: none;
            margin: 20px 40px;
            padding: 0;
        }

        li {
            display: inline;
            margin: 7px;

            a {
                color: white;
                text-decoration: none;
            }
            
            a:hover {
                @include text-glow($primary);
            }
        }

        @media only screen and (max-width: 768px) {
            
            justify-content: center;
            min-height: 40px;

            .site-logo {
                display: none;
            }

            ul {
                margin: 10px 0;
                display: flex;
                justify-content: space-around;
                width: 100%;
            }
        }

        // @media only screen and (max-width: 400px) {
        // }
    }

</style>