<script>
export default {
  data() {
    return {
      species: [],
    };
  },
  mounted() {
    this.fetchPeople();
  },
  methods: {
    async fetchPeople() {
      const { data } = await this.$axios.get('/species');
      this.species = data.results;
    }
  }
}
</script>

<template>
  <section class="max-w-6xl mx-auto py-12 min-h-300">
    <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
            We have the best species
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome species
        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="type in species"
        :key="type.url"
        class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center"
      >
        <div class="text-center">
          <p class="text-xl text-gray-700 font-bold mb-2">
            {{ type.name }}
          </p>
          <p class="text-base text-gray-400 font-normal">
            <strong>Classification</strong>
            {{ type.classification }}
          </p>
          <p class="text-base text-gray-400 font-normal">
            <strong>Designation</strong>
            {{ type.designation }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.min-h-300 {
  min-height: 300px;
}
</style>
