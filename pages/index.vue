<script>
import Placeholder from '@/components/Placeholder';
import lazyLoadComponent from '@/utils/lazyLoadComponent';
import People from '@/components/People';

const loadingData = {
  props: {
    height: '250px',
  }
};

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Placeholder,
    People,
    Films: lazyLoadComponent({
      componentFactory: () => import(/* webpackChunkName: "films" */ '@/components/Films'),
      loading: Placeholder,
      loadingData,
    }),
    Planets: lazyLoadComponent({
      componentFactory: () => import(/* webpackChunkName: "planets" */ '@/components/Planets'),
      loading: Placeholder,
      loadingData,
    }),
    Species: lazyLoadComponent({
      componentFactory: () => import(/* webpackChunkName: "species" */ '@/components/Species'),
      loading: Placeholder,
      loadingData,
    })
  },
}
</script>

<template>
  <div>
    <div class="p-4">
      <p>Available pages</p>
      <ul>
        <li><NuxtLink to="/map" class="text-blue-400">Ondemand Map</NuxtLink></li>
        <li><NuxtLink to="/map-lazy" class="text-blue-400">Lazy Map</NuxtLink></li>
      </ul>
    </div>
    <People/>
    <hr>
    <Films/>
    <hr>
    <Planets/>
    <hr>
    <Species/>
  </div>
</template>
