<template>
  <section>
    <div class="p-4">
      <p>Available pages</p>
      <ul>
        <li><NuxtLink to="/" class="text-blue-400">Homepage</NuxtLink></li>
        <li><NuxtLink to="/map-lazy" class="text-blue-400">Lazy Map</NuxtLink></li>
      </ul>
    </div>

    <GmapMap
      ref="mapRef"
      :center="{lat:-6.175110, lng:106.865036}"
      :zoom="18"
      map-type-id="terrain"
      style="width: 100%; height: 400px"
    ></GmapMap>
  </section>
</template>

<script>
export default {
  // mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

  //   this.$refs.mapRef.$mapPromise.then((map) => {
  //     map.panTo({lat: 1.38, lng: 103.80})
  //   })
  // },
}
</script>
