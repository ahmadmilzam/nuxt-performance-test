<script>
import GoogleMap from '@/components/GoogleMap';
export default {
  components: {
    GoogleMap,
  },
  data() {
    return {
      options: {
        center: {
          lat: -6.175110,
          lng: 106.865036,
        },
        zoom: 18,
        disableDefaultUI: true,
        zoomControl: true,
        styles:[{
            featureType: 'poi.business',
            elementType: 'labels.icon',
            stylers:[{ visibility: 'off' }]
        }],
      },
    }
  },
};
</script>

<template>
  <section>
    <div class="p-4">
      <p>Available pages</p>
      <ul>
        <li><NuxtLink to="/" class="text-blue-400">Homepage</NuxtLink></li>
        <li><NuxtLink to="/map-lazy" class="text-blue-400">Lazy Map</NuxtLink></li>
      </ul>
    </div>

    <GoogleMap :options="options"/>
  </section>
</template>
