<template>
  <div id="app">
    <Header />
    <div class="container mx-auto py-10 md:py-20 px-4 md:px-0">
      <Info />
      <News class="mt-6" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Info from "./components/Info";
import News from "./components/News";

export default {
  name: "App",
  components: {
    Header,
    Info,
    News,
  },
};
</script>
<style>
body {
  background-color: #e2e8f0;
}
</style>