<script setup>
import Search from "../Search.vue";
import { Icon } from "@iconify/vue";
import Subnav from "./Subnav.vue";
</script>

<template>
  <header>
    <div class="header_top">
      <div class="main_container">
        <div class="header_top_left flex items-center gap-3">
          <div class="logo">
            <router-link to="/">
              <img src="../../assets/images/logo.svg" alt="logo" />
            </router-link>
          </div>
          <div class="hidden md:flex">
            <Search />
          </div>
        </div>
        <div class="header_top_right flex items-center gap-5">
          <div class="links hidden md:flex">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">About</router-link>
            <router-link class="link" to="/contact">Contact</router-link>
            <router-link class="link" to="/blog">Blog</router-link>
          </div>
          <div class="items-center gap-3 hidden md:flex">
            <button>
              <Icon icon="lets-icons:favorite-light" class="w-6 h-6" />
            </button>
            <button>
              <Icon icon="bitcoin-icons:cart-outline" class="w-6 h-6" />
            </button>
            <button>
              <Icon icon="pepicons-pencil:person" class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <Subnav />
  </header>
</template>

<style scoped lang="scss">
.header_top {
  padding: 20px;
  .main_container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .links {
      align-items: center;
      gap: 30px;

      .link {
        color: rgb(203, 203, 203) !important;

        &.router-link-exact-active {
          color: black !important;
        }
      }
    }
  }
}
</style>
