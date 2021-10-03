<script>
export default {
  data() {
    return {
      starships: [],
    };
  },
  mounted() {
    this.fetchStarships();
  },
  methods: {
    async fetchStarships() {
      const { data } = await this.$axios.get('/starships');
      this.starships = data.results;
    }
  }
}
</script>

<template>
  <nav class="flex w-72 h-full bg-pink-500">
    <div class="w-full flex mx-auto px-6 py-8">
      <div class="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">
        <ul>
          <li v-for="ship in starships" :key="ship.url">
            <NuxtLink :to="ship.url">{{ ship.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
