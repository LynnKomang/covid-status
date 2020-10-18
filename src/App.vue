<template>
  <div id="app">
    <Header />
    <div class="container mx-auto py-20 px-4 md:px-0">
      <Info />
      <NewsCard class="mt-6 mx-auto" :articleInfo="articles[0]" />
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
      console.log(this.articles);
    });
  },
};
</script>
<style>
body {
  background-color: #e2e8f0;
}
</style>