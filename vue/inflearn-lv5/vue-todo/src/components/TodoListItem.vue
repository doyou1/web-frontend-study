<template>
  <li>{{ props.item }}</li>
</template>

<script setup lang="ts" name="TodoListItem">
const props = defineProps({
  item: {
    type: String,
    required: true,
  },
});
</script>

<style scope></style>
