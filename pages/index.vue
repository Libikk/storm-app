<template>
  <div>
    <Layout>
      <div class="index-page">
        <h1 v-if="$store.state.auth">
            Welcome {{ $store.state.auth.name }}
        </h1>
      </div>
    </Layout>
  </div>
</template>

<script>

import Layout from '../components/Layout';
import { getCookie, authUser } from '../utils/auth';
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  components: {
    Layout
  },
  methods: {
    logout () {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
    }
  },
  data: () => ({
      drawer: null,
    }),
}
</script>

<style lang="scss" scoped>
.index-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

