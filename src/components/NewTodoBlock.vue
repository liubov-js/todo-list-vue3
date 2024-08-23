<template>
  <div>
    <input
      placeholder="Add new todo..."
      class="todo-input"
      v-model="todo.task"
      @keyup.enter="createTask"
    />
    <CustomButton
      class="btn__active p-12-16 ml-16"
      v-if="todo.task"
      @click="createTask"
      >Submit</CustomButton
    >
  </div>
</template>

<script>
export default {
  name: "NewTodoBlock",
  data() {
    return {
      todo: {
        task: "",
        isCompleted: false,
      },
    };
  },
  methods: {
    createTask() {
      this.todo.id = Date.now();
      this.$emit("create", this.todo);
      this.todo = {
        task: "",
        isCompleted: false,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.todo-input {
  margin-top: 52px;
  width: 290px;
  border-radius: 8px;
  border: 1px solid #c7ccd1;
  padding: 12px;
  font-size: 14px;
}

.p-12-16 {
  padding: 12px 16px;
}

.ml-16 {
  margin-left: 16px;
}
</style>
