<template>
  <div
    class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0"
    style="background-color: #9921e8;background-image: linear-gradient(315deg, #9921e8 0%, #5f72be 74%);"
  >
    <div class="max-w-lg mx-auto">
      <a href="#">
        <h1 class="text-4xl font-bold text-white text-center">
          HomeList
        </h1>
      </a>
    </div>
    <div
      class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl"
    >
      <section>
        <h3 class="font-bold text-2xl">Welcome to HomeList</h3>
        <p class="text-gray-600 pt-2">Sign in to your account.</p>
      </section>

      <section class="mt-10">
        <form class="flex flex-col" @submit.prevent="login">
          <div class="mb-6 pt-3 rounded bg-gray-200">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              for="email"
            >
              Email
            </label>
            <input
              type="text"
              v-model="user.email"
              class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
            />
          </div>
          <div class="mb-6 pt-3 rounded bg-gray-200">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              for="password"
            >
              Password
            </label>
            <input
              type="password"
              v-model="user.password"
              class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
            />
          </div>
          <div class="flex justify-end">
            <a
              href="#"
              class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
            >
              Forgot your password?
            </a>
          </div>
          <button
            class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </section>
    </div>

    <div class="max-w-lg mx-auto flex justify-center text-white">
      <a href="#" class="hover:underline">Contact</a>
      <span class="mx-3">•</span>
      <a href="#" class="hover:underline">Privacy</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      loading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      if (!this.user.email || !this.user.password) return;
      this.laoding = true;
      this.error = null;

      try {
        await this.$store.dispatch('Auth/Login', this.user);
        await this.$router.push({ name: 'user' });
      } catch (error) {
        this.error = error;
        console.log(this.error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
