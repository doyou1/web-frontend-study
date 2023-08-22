<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input
      id="todo-input"
      type="text"
      :value="props.item"
      @input="handleInput"
    />
    <button @click="addTodo" type="button">추가</button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  item: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["input", "add"]);
const handleInput = (e: InputEvent) => {
  //   if (!e.target) return;
  const eventTarget = e.target as HTMLInputElement;
  emit("input", eventTarget.value);
};
const addTodo = () => {
  emit("add");
};
</script>
<style scoped></style>
