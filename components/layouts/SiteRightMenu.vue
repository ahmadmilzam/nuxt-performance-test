<script>
export default {
  data() {
    return {
      vehicles: [],
    };
  },
  mounted() {
    this.fetchVehicles();
  },
  methods: {
    async fetchVehicles() {
      const { data } = await this.$axios.get('/vehicles');
      this.vehicles = data.results;
      this.vehicles.length = 5;
    }
  }
}
</script>

<template>
  <nav class="flex w-72 h-full bg-yellow-400">
    <div class="w-full flex mx-auto px-6 py-8">
      <div class="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">
        <ul>
          <li v-for="vehicle in vehicles" :key="vehicle.url">
            {{ vehicle.name }} - {{ vehicle.model }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
