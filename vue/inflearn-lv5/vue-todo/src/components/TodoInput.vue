<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input
      id="todo-input"
      type="text"
      :value="props.item"
      @input="handleInput"
    />
    <button type="button" @click="addTodo">추가</button>
  </div>
</template>
<script setup lang="ts" name="TodoInput">
const props = defineProps({
  item: {
    type: String,
    required: true,
  },
});
const emit = defineEmits<{
  (e: 'input', value: string): void
  (e: 'add'): void
}>()

const handleInput = (e: Event) => {
  //   if (!e.target) return;
  const eventTarget = e.target as HTMLInputElement;
  emit("input", eventTarget.value);
};
const addTodo = () => {
  emit("add");
};
</script>
<style scoped></style>
