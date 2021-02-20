<template>
  <div>
    <div class="boards" v-for="board in boards" :key="board.id">
      <h2>
        <router-link :to="{ name: 'board' }">
          {{ board.title }}
        </router-link>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    boards() {
      return this.$store.getters['Boards/boards'];
    },
  },
  created() {
    this.$store.dispatch('Boards/fetchBoards');
  },
};
</script>

<style lang="scss" scoped>
.boards {
  @apply w-full flex items-center justify-center bg-gray-300 py-4 px-4 text-center cursor-pointer;

  &:hover {
    @apply bg-gray-200 border border-black;
  }

  h2 {
    @apply font-bold text-xl;
  }
}
</style>
