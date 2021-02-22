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
                  @change="markDone(item.id, i.id)"
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
  computed: {
    items() {
      return this.$store.getters['Board/items'];
    },
  },
  methods: {
    async itemAdd(event) {
      const itemId = event.target.dataset.itemId;
      const title = event.target.value;
      try {
        this.$store.dispatch('Board/addItem', {
          title: title,
          item_id: itemId,
        });
      } catch (error) {
        console.log(error);
      } finally {
        event.target.value = '';
      }
    },
    markDone(itemId, id) {
      try {
        this.$store.dispatch('Board/markDone', {
          itemId,
          id,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
