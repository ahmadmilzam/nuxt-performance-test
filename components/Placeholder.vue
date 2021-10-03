<template functional>
  <span
    :style="{ height: props.height, width: props.width }"
    class="placeholder"
  />
</template>

<script>
export default {
  props: {
    height: {
      // Make lines the same height as text.
      default: '1rem',
      type: String,
    },
    width: {
      // Make it possible to define a fixed width
      default: '100%',
      type: String,
    },
  },
};
</script>

<style lang="scss">
.placeholder {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  background-color: #c5c5c5;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 5s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
