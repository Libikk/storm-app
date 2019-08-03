<template>
  <div>
    <Layout>
      <div class="index-page">
        <span v-if="$store.state.auth">
            You are login as {{ $store.state.auth.name }}
        </span>
      </div>
    </Layout>
  </div>
</template>

<script>

import Layout from '../components/Layout';
import { getCookie, authUser } from '../utils/auth';
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  asyncData ({ req, res, store }) {
    const cookie = req && req.headers.cookie;
    if (cookie) {
      const accessToken = getCookie('auth', cookie);
      const personData = authUser(accessToken);
      store.commit('setAuth', personData)
    }
  },
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

