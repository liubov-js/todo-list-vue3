<template>
  <div class="card">
    <div class="container">
      <img alt="Logo" src="../assets/Illustration.svg" class="logo" />
      <h1>Today I need to</h1>
      <NewTodoBlock @create="createTask" />
      <div class="todo-list">
        <TodoItem
          :todo="todo"
          v-for="todo in todoList"
          v-bind:key="todo.id"
          @remove="removeTask"
          @toggleComplete="toggleComplete"
        />
      </div>
      <div class="indicators" v-if="todoList.length > 0">
        <TaskIndicator :taskAmount="counterCompletedTasks" status="Completed" />
        <TaskIndicator
          :taskAmount="todoList.length - counterCompletedTasks"
          status="To be finished"
        />
      </div>
      <NoTasks v-if="todoList.length === 0" />
    </div>
  </div>
</template>

<script>
import NoTasks from "./NoTasks.vue";
import NewTodoBlock from "./NewTodoBlock.vue";
import TodoItem from "./TodoItem.vue";
import TaskIndicator from "./TaskIndicator";

export default {
  name: "MainCard",
  components: {
    NoTasks,
    NewTodoBlock,
    TodoItem,
    TaskIndicator,
  },
  data() {
    return {
      todoList: [],
      counterCompletedTasks: 0,
    };
  },
  methods: {
    createTask(todo) {
      this.todoList.push(todo);
    },
    removeTask(todo) {
      const currentTask = this.todoList.find((t) => t.id === todo.id);

      if (currentTask.isCompleted) {
        this.counterCompletedTasks -= 1;
      }

      this.todoList = this.todoList.filter((t) => t.id !== todo.id);
    },
    toggleComplete(e, todo) {
      console.log(e.target.checked);
      const currentTask = this.todoList.find((t) => t.id === todo.id);
      currentTask.isCompleted = e.target.checked;

      if (e.target.checked) {
        this.counterCompletedTasks += 1;
      } else {
        this.counterCompletedTasks -= 1;
      }
    },
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
  display: flex;
  justify-content: center;
}

.container {
  width: 410px;
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

.todo-list {
  height: 85px;
  width: 410px;
  margin: 0 auto;
  margin-top: 40px;
  overflow: scroll;
}

.indicators {
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
}
</style>
