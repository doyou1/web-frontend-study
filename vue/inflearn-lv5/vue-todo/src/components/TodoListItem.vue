<template>
  <li>
    <span 
        class="item" 
        :class="todoItemClass"
        @click="toggleItem">
        {{ props.item.title }}
    </span>
    <button @click="removeItem">삭제</button>
  </li>
</template>

<script setup lang="ts" name="TodoListItem">
import { Todo } from "@/interfaces/interfaces";
import { computed, PropType } from "vue";

const props = defineProps({
  item: {
    type: Object as PropType<Todo>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
});
const emit = defineEmits<{
  (e: 'remove', value: number): void
  (e: 'toggle', item: Todo, value: number): void
}>();

const removeItem = () => {
    emit("remove", props.index);
};
const toggleItem = () => {
    emit("toggle", props.item, props.index);
};

const todoItemClass = computed<string | null>(() => {
    return props.item.done ? "complete" : null;
})
</script>

<style scope>
.item {
    cursor: pointer;
}

.complete {
    text-decoration: line-through;
}
</style>
