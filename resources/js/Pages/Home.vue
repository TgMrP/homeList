<template>
  <div class="container mx-auto">
    <!-- <div class="w-full bg-gray-300 py-4">
      <h1 class="text-center text-4xl font-bold">Boards</h1>
    </div> -->

    <board-form></board-form>

    <board-list
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    />
  </div>
</template>

<script>
import boardForm from '../Components/boardForm';
import BoardList from '../Components/boardList.vue';

export default {
  components: {
    boardForm,
    BoardList,
  },
};
</script>

<style lang="scss" scoped></style>
