<template>
  <div class="todo-item">
    <div>
      <input
        type="checkbox"
        :checked="todo.isCompleted"
        @change="(e) => $emit('toggleComplete', e, todo)"
      />
      <span v-if="!isEditing" class="todo-text">{{ todo.task }}</span>
      <input
        v-if="isEditing"
        type="text"
        v-model="editedTask"
        @keyup.enter="saveEdit"
        @blur="saveEdit"
        class="edit-input"
      />
    </div>
    <div>
      <img
        alt="Edit"
        src="../assets/pencil.svg"
        class="pencil-icon"
        @click="toggleEdit"
      />
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
  data() {
    return {
      isEditing: false,
      editedTask: this.todo.task,
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
      if (this.isEditing) {
        this.editedTask = this.todo.task;
      }
    },
    saveEdit() {
      if (this.isEditing) {
        this.isEditing = false;
        if (this.editedTask.trim() !== "") {
          this.$emit("edit", { ...this.todo, task: this.editedTask });
        } else {
          this.editedTask = this.todo.task;
        }
      }
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

.edit-input {
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
