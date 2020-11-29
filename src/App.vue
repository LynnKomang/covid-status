<template>
  <div id="app" class="bg-gray-200">
    <Header />
    <div class="container mx-auto py-10 md:py-20 px-8 md:px-0">
      <Info />
      <News class="mt-6" />
      <Charts class="mt-10" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Info from "./components/Info";
import News from "./components/News";
import Charts from "./components/Charts";

export default {
  name: "App",
  components: {
    Header,
    Info,
    News,
    Charts,
  },
};
</script>
<style>
body {
  background-color: #edf2f7;
}
</style>