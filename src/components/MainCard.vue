<template>
  <div class="card">
    <div class="container">
      <img alt="Logo" src="../assets/Illustration.svg" class="logo" />
      <h1>Today I need to</h1>
      <NewTodoBlock @create="createTask" />
      <div class="todo-list">
        <TodoItem
          :todo="todo"
          v-for="todo in filteredTodos"
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
      <div class="btns" v-if="todoList.length > 0">
        <CustomButton
          v-if="todoList.length > counterCompletedTasks"
          class="btn__no-active p-8-12"
          @click="checkAll"
          >Check all</CustomButton
        >
        <div class="filter-btns">
          <CustomButton
            class="p-8-12"
            :class="filteredCondition === '' ? 'btn__active' : 'btn__no-active'"
            @click="showAll"
            >All</CustomButton
          >
          <CustomButton
            v-if="
              counterCompletedTasks > 0 &&
              counterCompletedTasks < todoList.length
            "
            class="p-8-12"
            :class="
              filteredCondition === 'active' ? 'btn__active' : 'btn__no-active'
            "
            @click="showActive"
            >Active</CustomButton
          >
          <CustomButton
            v-if="
              counterCompletedTasks > 0 &&
              counterCompletedTasks < todoList.length
            "
            class="p-8-12"
            :class="
              filteredCondition === 'completed'
                ? 'btn__active'
                : 'btn__no-active'
            "
            @click="showCompleted"
            >Complited</CustomButton
          >
        </div>
        <CustomButton
          v-if="counterCompletedTasks > 0"
          class="btn__no-active p-8-12"
          @click="clearCompleted"
          >Clear complited</CustomButton
        >
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
      filteredCondition: "",
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
      const currentTask = this.todoList.find((t) => t.id === todo.id);
      currentTask.isCompleted = e.target.checked;

      if (e.target.checked) {
        this.counterCompletedTasks += 1;
      } else {
        this.counterCompletedTasks -= 1;
      }
    },
    checkAll() {
      this.todoList.forEach((todo) => (todo.isCompleted = true));
      this.counterCompletedTasks = this.todoList.length;
    },
    clearCompleted() {
      this.todoList = this.todoList.filter(
        (todo) => todo.isCompleted === false
      );
      this.counterCompletedTasks = 0;
    },
    showAll() {
      this.filteredCondition = "";
    },
    showActive() {
      this.filteredCondition = "active";
    },
    showCompleted() {
      this.filteredCondition = "completed";
    },
  },
  computed: {
    filteredTodos() {
      switch (this.filteredCondition) {
        case "active":
          return [...this.todoList].filter((todo) => !todo.isCompleted);
        case "completed":
          return [...this.todoList].filter((todo) => todo.isCompleted);
        default:
          return this.todoList;
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

.btns {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 88px auto 128px;
}

.p-8-12 {
  padding: 8px 12px;
}

.filter-btns {
  grid-column-start: 2;
}
</style>
