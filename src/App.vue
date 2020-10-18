<template>
  <div id="app">
    <Header />
    <div class="container mx-auto py-20 px-4 md:px-0">
      <Info />

      <div
        class="flex py-4 justify-between mt-6 overflow-hidden overflow-x-scroll"
      >
        <NewsCard
          class="flex-none mx-5"
          v-for="article in articles"
          :key="article.url"
          :articleInfo="article"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Info from "./components/Info";
import NewsCard from "./components/NewsCard";
import { getArticles } from "./ApiRequests";

export default {
  name: "App",
  components: {
    Header,
    Info,
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
<style>
body {
  background-color: #e2e8f0;
}
</style>