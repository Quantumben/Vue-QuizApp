<template>
    <div>
      <div v-if="showForm" class="mt-50 mx-auto container" style="text-align: center">
        <input
          type="text"
          name="email"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
          placeholder="Enter Your Name"
          style="font-weight: bold"
          required
        />
        <button
          @click="redirectToApp"
          type="button"
          class="mt-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Start Quiz
        </button>
      </div>
      <router-view v-if="!showForm"></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: "LandingPage",
    data() {
      return {
        showForm: true,
      };
    },
    methods: {
      redirectToApp() {
        this.$router.push("/start");
        this.showForm = false;
      },
    },
  };
  </script>
  