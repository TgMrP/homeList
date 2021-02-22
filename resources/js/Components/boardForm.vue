<template>
  <form @submit.prevent="addBoard">
    <div class="form-control">
      <div class="relative">
        <input
          type="text"
          class="w-full pr-16 input input-primary input-bordered"
          v-model="title"
        />
        <button
          type="button"
          @click="addBoard"
          class="absolute right-0 rounded-l-none btn btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="[title ? '' : 'text-gray-600']"
            class="h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: null,
    };
  },
  methods: {
    async addBoard() {
      if (!this.title) return;

      try {
        await this.$store.dispatch('Boards/addBoard', this.title);
      } catch (error) {
        console.log(error);
      } finally {
        this.title = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  @apply w-full py-4;
}
</style>
