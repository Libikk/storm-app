<template>
  <v-app id="inspire">
    <Header />
        <v-content class="content">
            <slot/>
        </v-content>
    <Footer/>
  </v-app>
</template>

<script>

import Footer from './Footer';
import Header from './Header'

export default {
    components: {
        Footer,
        Header
    },
  methods: {
      test() {
          console.log(this, this.$store)
      }
  },
  data: () => ({
      drawer: null,
    }),
}
</script>

<style lang="scss">
@import '../assets/variables.scss';
// globals
.global-button__primary {
    color: $white;

    :hover {
        color: $red;
    }
}

a {
    text-decoration: none;
}

.content {
    display: flex;
    justify-items: center;
    margin: 0 50px;
}

</style>
