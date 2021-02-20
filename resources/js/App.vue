<template>
    <div>
        <router-view />
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("Auth/fetchUser");
    }
};
</script>

<style lang="scss" scoped></style>
