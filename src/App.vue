<script setup>
import { reactive } from 'vue';
import HeaderMenu from './components/layout/HeaderMenu.vue'
import SideNav from './components/layout/SideNav.vue'

import {useRouter} from 'vue-router'

import '@headlessui/vue'

const state = reactive({
  router : useRouter()
})


</script>

<template>
  <header class="wrap">

    <!-- <div v-if="(state.router?.currentRoute?.path === '/login')" class="login-wrap">
      <router-view></router-view>
    </div> -->
    <!-- <div v-else class="admin-wrap"> -->
      <div class="admin-wrap">

      <HeaderMenu></HeaderMenu>
      <div class="container">
        <SideNav></SideNav>
        <router-view></router-view>
      </div>
    </div>

    
  </header>

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
