<template>
  <div>
    <div
      class="card shadow-lg compact side bg-primary"
      v-for="item in items"
      :key="item.id"
    >
      <div class="flex-row items-center space-x-4 card-body">
        <div>
          <h2 class="card-title text-content-primary">{{ item.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>

<style lang="scss" scoped></style>
