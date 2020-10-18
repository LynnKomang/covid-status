<template>
  <a
    :href="articleInfo.url"
    class="bg-white max-w-md rounded-lg group shadow hover:bg-gray-400 block transition-colors duration-200"
  >
    <div class="pb-3/5 relative">
      <img
        :src="articleInfo.urlToImage"
        class="rounded-lg group-hover:opacity-75 w-full h-full absolute transition-opacity duration-200"
        alt="Article image"
      />
    </div>
    <div class="py-2 px-5 text-right">
      <div class="text-xl font-bold mb-3">{{ articleInfo.title }}</div>
      <div class="mb-4">
        {{ articleInfo.description }}
      </div>
      <div class="text-sm text-gray-800">{{ articleInfo.publishedAt }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    articleInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>