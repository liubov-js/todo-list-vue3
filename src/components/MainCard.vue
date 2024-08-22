<template>
  <div class="card">
    <img alt="Logo" src="../assets/Illustration.png" class="logo" />
    <h1>Today I need to</h1>
    <input placeholder="Add new todo..." class="todo-input" />
    <NoTasks />
  </div>
</template>

<script>
import NoTasks from "./NoTasks.vue";

export default {
  name: "MainCard",
  components: {
    NoTasks,
  },
};
</script>

<style scoped lang="scss">
.card {
  background-color: #fff;
  width: 730px;
  height: 719px;
  border-radius: 24px;
  position: absolute;
}

.logo {
  display: block;
  max-width: 180px;
  margin: 0 auto;
  margin-top: 32px;
}

h1 {
  color: #202427;
  font-size: 24px;
  font-weight: 700;
  margin: 48px 0 0;
}

.todo-input {
  margin-top: 52px;
  width: 317px;
  border-radius: 8px;
  border: 1px solid #c7ccd1;
  padding: 12px;
  font-size: 14px;
}
</style>
