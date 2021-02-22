<template>
  <div class="container mx-auto">
    <div
      class="title py-4 text-center w-full flex items-center justify-between"
    >
      <div class="w-1/3"></div>
      <h1 class="w-1/3">{{ board.title }}</h1>
      <div class="w-1/3 form-control items-end">
        <label class="cursor-pointer label">
          <span class="label-text">Show All</span>
          <div class="ml-2">
            <input
              type="checkbox"
              :checked="showAll ? true : false"
              class="toggle toggle-primary"
              @change="$store.dispatch('Board/showAll')"
            />
            <span class="toggle-mark"></span>
          </div>
        </label>
      </div>
    </div>
    <item-form />
    <div>
      <list-item
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      />
    </div>
  </div>
</template>

<script>
import ItemForm from '../Components/itemForm.vue';
import listItem from '../Components/listItem.vue';

export default {
  components: { listItem, ItemForm },
  computed: {
    board() {
      return this.$store.getters['Board/board'];
    },
    showAll() {
      return this.$store.getters['Board/showAll'];
    },
  },
  beforeDestroy() {
    this.$store.dispatch('Board/clearBoard');
  },
  created() {
    this.$store.dispatch('Board/fetchBoard');
  },
};
</script>

<style lang="scss" scoped></style>
