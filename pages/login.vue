<template>
  <Layout>
    <LoginForm :is-login-page="true" />
  </Layout>
</template>

<script>
import LoginForm from '../components/LoginForm';
import Layout from '../components/Layout';

export default {
  components: {
    LoginForm, Layout
  },
  middleware: 'notAuthenticated',
  methods: {
  }
}
</script>
