<template>
  <div class="container mx-auto">
    <div class="title py-4 text-center w-full">
      <h1>{{ board.title }}</h1>
    </div>
    <item-form :board="board" @added="addItem" />
    <div>
      <list-item
        :items="board.items"
        @added="addItem"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ItemForm from '../Components/itemForm.vue';
import listItem from '../Components/listItem.vue';

export default {
  components: { listItem, ItemForm },
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
    addItem(item) {
      if (item.item_id) {
        this.board.items = this.board.items.map(i => {
          if (i.id == item.item_id) {
            i.items = [...i.items, item];
          }

          return i;
        });
      } else {
        this.board.items.push(item);
      }
    },
  },
  created() {
    this.fetchBoard();
  },
};
</script>

<style lang="scss" scoped></style>
