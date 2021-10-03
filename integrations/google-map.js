import OnDemand from "@/utils/OnDemandVendors";
const API_KEY = 'AIzaSyDoIDTQoxppG4jjD7cJ0HxrQAQas3BpQ4Q';

export default (ctx, inject) => {
  const loader = new OnDemand(
    `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`
  );

  inject("gmap", {
    showMap(el, mapOptions) {
      loader.load(() => {
        // eslint-disable-next-line no-unused-vars
        const gmap = new window.google.maps.Map(el, mapOptions);
        const position = new window.google.maps.LatLng(
          mapOptions.center.lat, mapOptions.center.lng
        );
        const marker = new window.google.maps.Marker({
          position,
          clickable: false,
        });
        marker.setMap(gmap);
      });
    }
  });
};
