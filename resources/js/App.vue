<template>
  <div class="min-h-screen block w-full bg-default text-content-900">
    <header>
      <nav-bar />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './Components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
  async created() {
    await this.$store.dispatch('fetchData');
  },
};
</script>

<style lang="scss"></style>
