<template>
  <div class="navbar mb-2 shadow-lg bg-content-800 text-content-100">
    <div class="flex-1 px-2 mx-2">
      <router-link :to="{ name: 'home' }" class="text-lg font-bold">
        HomeList
      </router-link>
    </div>
    <div class="flex-none hidden px-2 mx-2 md:flex">
      <div class="flex items-stretch">
        <template v-if="$store.getters['Auth/authenticated']">
          <a class="btn btn-ghost btn-sm rounded-btn hover:text-content-100">
            {{ $store.getters['Auth/user'].name }}
          </a>
        </template>
        <template v-else>
          <router-link
            :to="{ name: 'login' }"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            Login
          </router-link>
        </template>

        <!--
            Change Themes
        -->
        <div class="w-24">
          <select
            data-choose-theme
            class="select select select-sm w-full max-w-xs"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="retro">Retro</option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { themeSelect } from 'theme-change';

export default {
  mounted() {
    themeSelect();
  },
};
</script>

<style lang="scss" scoped></style>
