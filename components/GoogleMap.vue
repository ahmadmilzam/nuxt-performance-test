<script>
export default {
  name: 'GoogleMap',
  props: {
    options: {
      default: () => {
        return {};
      },
      type: Object,
    },
  },
  mounted() {
    this.$gmap.showMap(this.$refs.mapCanvas, this.options);
  }
};
</script>

<template>
  <div
    ref="mapCanvas"
    class="gmapcontainer"></div>
</template>

<style>
.gmapcontainer {
  display: block;
  height: 400px;
  width: 100%;
}
</style>
