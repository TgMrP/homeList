<template>
  <div>
    {{ board }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
      const { data } = await axios.get(`/api/board/${id}`);
      this.board = data;
    },
  },
  created() {
    this.fetchBoard();
  },
};
</script>

<style lang="scss" scoped></style>
