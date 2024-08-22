<template>
  <MainCard />
</template>

<script>
import MainCard from "./components/MainCard.vue";

export default {
  name: "App",
  components: {
    MainCard,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  background: linear-gradient(to bottom right, #8ec5fc, #f0c3fc);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  text-align: center;
}
</style>
