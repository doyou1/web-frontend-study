<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
  </div>
</template>
<script setup lang="ts">
import TodoInput from "@/components/TodoInput.vue";
import { ref } from "vue";
const todoText = ref("");
const updateTodoText = (value: string) => {
  todoText.value = value;
};
const addTodoItem = () => {
  const value = todoText.value;
  localStorage.setItem(value, value);
  initTodoText();
};
const initTodoText = () => {
  todoText.value = "";
};
</script>
<style scoped></style>
