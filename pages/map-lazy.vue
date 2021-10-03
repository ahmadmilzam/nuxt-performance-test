<script>
import Placeholder from '@/components/Placeholder';
import lazyLoadComponent from '@/utils/lazyLoadComponent';

const loadingData = {
  props: {
    height: '400px',
  }
};

export default {
  components: {
    GoogleMap: lazyLoadComponent({
      componentFactory: () => import(/* webpackChunkName: "lazy-gmap" */ '@/components/GoogleMap'),
      loading: Placeholder,
      loadingData,
    }),
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
        }]
      }
    }
  },
  methods: {
    showMap(isVisible) {
      if(isVisible) this.$places.plot(this.$refs.map, 46.8772, -96.7898);
    }
  },
}
</script>

<template>
  <section>
    <div class="p-4">
      <p>Available pages</p>
      <ul>
        <li><NuxtLink to="/" class="text-blue-400">Homepage</NuxtLink></li>
        <li><NuxtLink to="/map" class="text-blue-400">Ondemand Map</NuxtLink></li>
      </ul>
    </div>

    <div class="block">Above The Fold1</div>

    <GoogleMap
      :options="options"/>
  </section>
</template>

<style scoped>
.block {
  display: block;
  height: 400px;
  background-color: #ddd;
  margin-bottom: 14px;
}
</style>
