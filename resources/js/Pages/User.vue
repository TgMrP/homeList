<template>
  <div>{{ user }}</div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    if (!this.$store.getters['Auth/authenticated'])
      return this.$router.push({ name: 'home' });

    this.axios.get('/api/user').then(res => {
      this.user = res.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
