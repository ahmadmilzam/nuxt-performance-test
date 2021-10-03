<script>
export default {
  data() {
    return {
      peoples: [],
    };
  },
  mounted() {
    this.fetchPeople();
  },
  methods: {
    async fetchPeople() {
      const { data } = await this.$axios.get('/people');
      this.peoples = data.results;
    }
  }
}
</script>

<template>
  <section class="max-w-6xl mx-auto py-12 min-h-300">
    <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
            We have the best people
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="people in peoples"
        :key="people.url"
        class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center"
      >
        <div class="mb-8">
          <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo">
        </div>
        <div class="text-center">
          <p class="text-xl text-gray-700 font-bold mb-2">
            {{ people.name }}
          </p>
          <p class="text-base text-gray-400 font-normal">
            {{ people.birth_year }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.min-h-300 {
  min-height: 600px;
}
</style>
