<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
};
</script>

<style scoped lang="scss">
.btn {
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.btn__active {
  color: #fff;
  background-color: #2578f4;
}

.btn__no-active {
  color: #202427;
  background-color: transparent;
}
</style>
