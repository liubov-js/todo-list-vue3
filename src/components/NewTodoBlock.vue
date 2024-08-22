<template>
  <div>
    <input
      placeholder="Add new todo..."
      class="todo-input"
      v-model="todo.task"
      @keyup.enter="createTask"
    />
    <CustomButton v-if="todo.task" @click="createTask" />
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
  name: "NewTodoBlock",
  components: {
    CustomButton,
  },
  data() {
    return {
      todo: {
        task: "",
      },
    };
  },
  methods: {
    createTask() {
      this.todo.id = Date.now();
      this.$emit("create", this.todo);
      this.todo = {
        task: "",
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
</style>
