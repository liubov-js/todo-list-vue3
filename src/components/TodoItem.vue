<template>
  <div class="todo-item">
    <div>
      <input
        type="checkbox"
        :checked="todo.isCompleted"
        @change="(e) => $emit('toggleComplete', e, todo)"
      />
      <span class="todo-text">{{ todo.task }}</span>
    </div>
    <div>
      <img alt="Edit" src="../assets/pencil.svg" class="pencil-icon" />
      <img
        alt="Delete"
        src="../assets/bin.svg"
        class="bin-icon"
        @click="$emit('remove', todo)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.todo-text {
  margin-left: 8px;
}

.pencil-icon {
  cursor: pointer;
}

.bin-icon {
  margin-left: 16px;
  cursor: pointer;
}
</style>
