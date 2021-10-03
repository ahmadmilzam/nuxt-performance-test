<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.fetchSomething();
  },
  methods: {
    async fetchSomething() {
      const response = await this.$axios.$get('/people/1');
      this.user = response;
      // console.log('response people: ', response);
    },
  },
};
</script>
<template>
  <header class="flex justify-between items-center bg-blue-300 p-4">
    <div class="flex">Logo</div>
    <div class="flex">Hello, {{ user.name }}!</div>
  </header>
</template>
