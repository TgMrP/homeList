<template>
  <div class="container mx-auto">
    <div class="title py-4 prose text-center w-full">
      <h1>{{ board.title }}</h1>
    </div>
    <div>
      <list-item :items="board.items" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import listItem from '../Components/listItem.vue';

export default {
  components: { listItem },
  computed: {
    ...mapGetters(['Boards/getBoard']),
  },
  data() {
    return {
      board: {},
    };
  },
  methods: {
    async fetchBoard() {
      const id = this.$route.params.id;
      const { data } = await this.axios.get(`/api/board/${id}`);
      this.board = data;
    },
  },
  created() {
    this.fetchBoard();
  },
};
</script>

<style lang="scss" scoped></style>
