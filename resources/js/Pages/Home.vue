<template>
    <div class="container mx-auto">
        <div class="w-full bg-gray-300 py-4 mb-4">
            <h1 class="text-center text-4xl font-bold">Boards</h1>
        </div>

        <board-form></board-form>

        <div class="grid grid-cols-3 gap-4">
            <div
                class="w-full flex items-center justify-center bg-gray-300 py-4 text-center"
                v-for="board in boards"
                :key="board.id"
            >
                <h2 class="font-bold text-xl">{{ board.title }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
import boardForm from "../Components/boardForm";

export default {
    components: {
        boardForm
    },
    computed: {
        boards() {
            return this.$store.getters["Boards/boards"];
        }
    },
    created() {
        this.$store.dispatch("Boards/fetchBoards");
    }
};
</script>

<style lang="scss" scoped></style>
