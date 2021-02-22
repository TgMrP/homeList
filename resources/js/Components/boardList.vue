<template>
  <div>
    <div
      class="card shadow-lg compact side bg-primary"
      v-for="board in boards"
      :key="board.id"
    >
      <div class="flex-row items-center space-x-4 card-body">
        <div class="flex-1">
          <h2 class="card-title text-content-primary">{{ board.title }}</h2>
          <p class="text-content-secondary">
            <strong>Last update: </strong>
            {{ board.updated_at }}
          </p>
        </div>
        <div class="flex-0">
          <button
            class="btn btn-sm"
            @click="$router.push({ name: 'board', params: { id: board.id } })"
          >
            Enter
          </button>
        </div>
      </div>
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

<style lang="scss" scoped></style>
