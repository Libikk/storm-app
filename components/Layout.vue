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
    }
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

.global-button__secondary {
    color: $white;
    background: green;

    :hover {
        color: $red;
    }
}

a {
    color: unset;
    text-decoration: none;
}

.content {
    display: flex;
    justify-items: center;
    margin: 0 50px;
}

</style>
