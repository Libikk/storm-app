<template>
  <v-app id="inspire">
    <Header />
        <v-content>
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

<style lang="scss" scoped>
@import '../assets/variables.scss';

.global-button__primary {
    color: $white;

    :hover {
        color: $red;
    }
}

</style>
