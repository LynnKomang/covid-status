<template>
  <div class="text-center mx-auto pb-4 pt-4 w-full">
    <div class="text-6xl mb-2">{{ number }}</div>
    <div class="text-3xl">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    number: Number,
    title: String,
  },
};
</script>