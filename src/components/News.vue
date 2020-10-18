<template>
  <div class="flex py-4 justify-between overflow-hidden overflow-x-scroll">
    <NewsCard
      class="flex-none mx-5"
      v-for="article in articles"
      :key="article.url"
      :articleInfo="article"
    />
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