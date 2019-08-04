<template>
    <v-app-bar class="app-bar">
        <div class="app-bar__nav-wrapper">
            <NuxtLink to="/">
                <img src="~/assets/StormLogo.png" class="nav-wrapper__logo">
            </NuxtLink>
        </div>
        <div class="app-bar__menu">
            <v-btn v-if="!$store.state.auth" @click="toggleModal" class="global-button__primary">Login</v-btn>
            <v-menu v-else offset-y>
                <template v-slot:activator="{ on }">
                    <v-avatar color="indigo" size="45" v-bind="attrs" v-on="on">
                        <span class="white--text headline">{{ $store.state.auth.name[0] }}</span>
                    </v-avatar>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>
                            <NuxtLink v-if="$store.state.auth" to="/employees" class="menu__item">
                                Employees
                            </NuxtLink>
                        </v-list-item-title>
                     </v-list-item>
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
      toggleModal() {
          this.isModalOpen = !this.isModalOpen
      },
      logout () {
        this.$router.push('/');
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


    &__nav-wrapper {
        display: flex;
        align-items: center;

        &__logo {
            width: 170px;
        }
    }
    .app-bar__menu {

        .menu__item {
            cursor: pointer;
        }
    }

    .app-bar__modal {
        width: fit-content;
    }

}
</style>
