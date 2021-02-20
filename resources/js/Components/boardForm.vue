<template>
  <form
    class="w-full bg-gray-300 py-4 px-4 mb-4 flex items-center justify-center"
    @submit.prevent="addBoard"
  >
    <input
      type="text"
      v-model="title"
      class="text-2xl px-4 py-2 w-full bg-gray-200 focus:outline-none "
    />
    <svg
      @click="addBoard"
      class="text-white h-12 ml-2"
      :class="[title ? 'bg-green-600' : 'bg-gray-600']"
      xmlns="http://www.w3.org/2000/svg"
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

<style lang="scss" scoped></style>
