<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('Auth/fetchUser');
    if (this.$store.getters['Auth/authenticated']) {
      await this.$store.dispatch('Boards/fetchBoards');
    }
  },
};
</script>

<style lang="scss" scoped></style>
