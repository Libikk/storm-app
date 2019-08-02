<template>
    <v-app-bar class="app-bar">
        <div>
            <img src="~/assets/StormLogo.png" class="app-bar__logo">
        </div>
        <div class="app-bar__menu">
            <v-btn v-if="!$store.state.auth" @click="toggleModal" class="global-button__primary">Login</v-btn>
            <v-menu v-else offset-y>
                <template v-slot:activator="{ on }">
                    <v-avatar color="indigo" size="45" v-bind="attrs" v-on="on">
                        <span class="white--text headline">CJ</span>
                    </v-avatar>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title @click="logout">Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-dialog class="app-bar__modal"  v-model="isModalOpen">
                <LoginForm :toggleModal="toggleModal"/>
            </v-dialog>
        </div>
    </v-app-bar>
</template>

<script>

import LoginForm from './LoginForm';
const Cookie = process.client ? require('js-cookie') : undefined

export default {
    components: {
        LoginForm
    },
    data: () => ({
        drawer: null,
        isModalOpen: false,
        attrs: null
    }),
    methods: {
      test() {
          console.log(this, this.$store)
      },
      toggleModal() {
          this.isModalOpen = !this.isModalOpen
      },
      logout () {
        Cookie.remove('auth')
        this.$store.commit('setAuth', null)
      }
  },
}
</script>

<style lang="scss">
.app-bar  {
    max-height: 120px;
    display: flex;
    align-items: center;

    .v-toolbar__content {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    &__logo {
        width: 200px;
    }

    .app-bar__modal {
        width: fit-content;
    }

}
</style>
