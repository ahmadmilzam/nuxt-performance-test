import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDoIDTQoxppG4jjD7cJ0HxrQAQas3BpQ4Q',
    libraries: 'places',
  },
});
