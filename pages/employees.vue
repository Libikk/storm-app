<template>
  <Layout>
    <h1>Welcome on secret page.</h1>
    <NuxtLink to="/">
      Back home
    </NuxtLink>
  </Layout>
</template>

<script>

import Layout from '../components/Layout';
export default {
  middleware: 'authenticated',
  components: {
    Layout
  }
}
</script>
