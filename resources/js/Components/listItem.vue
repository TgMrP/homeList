<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <div class="relative bg-primary rounded-t-lg">
        <h4 class="text-center text-content-primary py-2">
          {{ item.title }}
        </h4>
      </div>
      <div class="border border-primary py-2 px-4">
        <div class="" v-for="i in item.items" :key="i.id">
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">
                {{ i.title }}
              </span>
              <div>
                <input
                  type="checkbox"
                  :checked="i.done"
                  class="checkbox checkbox-accent"
                />
                <span class="checkbox-mark"></span>
              </div>
            </label>
          </div>
        </div>
        <input
          type="text"
          class="form-control input input-xs w-full"
          @keydown.enter="itemAdd"
          :data-board-id="item.board_id"
          :data-item-id="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import itemForm from './itemForm.vue';
export default {
  components: { itemForm },
  props: ['items'],
  methods: {
    async itemAdd(event) {
      const boardId = event.target.dataset.boardId;
      const itemId = event.target.dataset.itemId;
      const title = event.target.value;
      const { data } = await this.axios.post(
        `/api/board/${boardId}/items/add`,
        {
          title,
          item_id: itemId,
        }
      );

      event.target.value = '';

      this.$emit('added', data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
