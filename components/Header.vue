<template>
    <v-app-bar class="app-bar">
        <div>
            <img src="~/assets/StormLogo.png" class="app-bar__logo">
        </div>
        <div class="app-bar__menu">
            <v-btn class="global-button__primary">Login</v-btn>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </div>
    </v-app-bar>
</template>

<style lang="scss" scoped>
.app-bar {
    max-height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
        width: 115px;
    }

    &__menu {

    }

}
</style>
