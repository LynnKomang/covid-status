<template>
  <div>
    <div
      class="animate__animated animate__fadeIn text-3xl text-center md:text-5xl md:text-left transition-opacity font-medium mb-3 duration-200"
      :class="articles.length == 0 ? 'opacity-0' : 'opacity-100'"
    >
      News from the country
    </div>
    <div class="flex py-4 justify-between overflow-hidden overflow-x-scroll">
      <NewsCard
        class="flex-none mx-5"
        v-for="article in articles"
        :key="article.url"
        :articleInfo="article"
      />
    </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard";
import { getArticles } from "../ApiRequests";

export default {
  components: {
    NewsCard,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    getArticles().then((articles) => {
      this.articles = articles;
    });
  },
};
</script>