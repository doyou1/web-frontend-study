<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
      <div>
        <ul>
          <TodoListItem v-for="(item, index) in todoItems" :key="index" :item="item"/>
        </ul>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoListItem from "@/components/TodoListItem.vue";

const STORAGE_KEY = "vue-todo-ts-v1";
const storage = {
  save(value: any[]) {
    const parsed = JSON.stringify(value);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  fetch() {
      const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
      const result =  JSON.parse(todoItems);
      return result;

  }
};

const todoText = ref("");
const todoItems = ref([] as any[]);
const updateTodoText = (value: string) => {
  todoText.value = value;
};
const addTodoItem = () => {
  const value = todoText.value;
  todoItems.value.push(value);
  storage.save(todoItems.value);
  initTodoText();
};
const initTodoText = () => {
  todoText.value = "";
};

const fetchTodoItems = () => {
  todoItems.value = storage.fetch();
}

onMounted(() => {
  fetchTodoItems();
});
</script>
<style scoped></style>
