<template>
  <div class="no-tasks-container">
    <div class="no-tasks">
      <img alt="Check" src="../assets/checkmark-done.png" class="check" />
      <span class="no-tasks-text">Congrat, you have no more tasks to do</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoTasks",
};
</script>

<style scoped lang="scss">
.no-tasks-container {
  bottom: 32px;
  position: absolute;
  width: inherit;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.no-tasks {
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-tasks-text {
  color: #8f99a3;
  font-size: 14px;
  font-weight: 400;
  margin-left: 8px;
}
</style>
