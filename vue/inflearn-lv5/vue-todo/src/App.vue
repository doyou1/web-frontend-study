<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
      <div>
        <ul>
          <TodoListItem 
            v-for="(item, index) in todoItems" 
            :key="index" 
            :index="index" 
            :item="item" 
            @remove="removeTodoItem" 
            @toggle="toggleTodoItemDone"
          />
        </ul>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import { Todo } from "@/interfaces/interfaces";

const STORAGE_KEY = "vue-todo-ts-v1";
const storage = {
  save(value: Todo[]) {
    const parsed = JSON.stringify(value);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  fetch() : Todo[]{
      const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
      const result =  JSON.parse(todoItems);
      return result;
  }
};

const todoText = ref("");
const todoItems = ref([] as Todo[]);
const updateTodoText = (value: string) => {
  todoText.value = value;
};
const addTodoItem = () => {
  const value = todoText.value;
  const todo: Todo = {
    title: value,
    done: false
  };
  todoItems.value.push(todo);
  storage.save(todoItems.value);
  initTodoText();
};
const initTodoText = () => {
  todoText.value = "";
};

const fetchTodoItems = () => {
  todoItems.value = storage.fetch().sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
}

const removeTodoItem = (index: number) => {
  todoItems.value.splice(index, 1);
  storage.save(todoItems.value);
}

const toggleTodoItemDone = (item: Todo, index: number) => {
  todoItems.value.splice(index, 1, {
  ...item,    
    done: !item.done,
  });
  storage.save(todoItems.value);
}

onMounted(() => {
  fetchTodoItems();
});
</script>
<style scoped></style>
