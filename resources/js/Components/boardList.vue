<template>
  <div>
    <div class="boards" v-for="board in boards" :key="board.id">
      <router-link
        :to="{ name: 'board', params: { id: board.id } }"
        class="w-full h-full flex items-center"
      >
        <h2>
          {{ board.title }}
        </h2>
      </router-link>
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
};
</script>

<style lang="scss" scoped>
.boards {
  @apply w-full flex items-center justify-center bg-gray-300 py-4 px-4 text-center cursor-pointer;

  &:hover {
    @apply bg-gray-200 border border-black;
  }

  h2 {
    @apply w-full font-bold text-xl;
  }
}
</style>
