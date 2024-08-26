<template>
  <div class="indicator">
    <div class="task-amount">{{ taskAmount }} tasks</div>
    <div class="status">{{ status }}</div>
    <div class="progress-bar">
      <div
        class="progress-fill"
        :style="{
          width: progress + '%',
          backgroundColor: this.status === 'Completed' ? '#5D5FEF' : '#EF5DA8',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskIndicator",
  props: {
    status: {
      type: String,
      required: true,
    },
    taskAmount: {
      type: Number,
      required: true,
    },
    allTasks: {
      type: Number,
      required: true,
    },
  },
  computed: {
    progress() {
      return this.allTasks > 0 ? (this.taskAmount / this.allTasks) * 100 : 0;
    },
  },
};
</script>

<style scoped lang="scss">
.indicator {
  width: 190px;
  height: 85px;
  background-color: rgba(32, 36, 39, 0.05);
  text-align: left;
  border-radius: 8px;
}

.task-amount {
  color: #202427;
  opacity: 0.5;
  font-size: 12px;
  font-weight: 600;
  margin-top: 16px;
  margin-left: 16px;
}

.status {
  color: #202427;
  font-size: 17px;
  font-weight: 700;
  margin-top: 4px;
  margin-left: 16px;
}

.progress-bar {
  width: 158px;
  height: 4px;
  border-radius: 2px;
  background-color: rgba(32, 36, 39, 0.07);
  margin-top: 12px;
  margin-left: 16px;
  position: relative;
}

.progress-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.3s ease-in-out;
}

@media (max-width: 480px) {
  .indicator {
    width: 140px;
  }

  .status {
    font-size: 15px;
  }

  .progress-bar {
    width: 106px;
  }
}
</style>
