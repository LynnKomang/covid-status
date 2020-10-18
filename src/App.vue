<template>
  <div id="app">
    <Header />
    <div class="container mx-auto py-20 px-4 md:px-0">
      <Info />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Info from "./components/Info";

export default {
  name: "App",
  components: {
    Header,
    Info,
  },
};
</script>
<style>
body {
  background-color: #e2e8f0;
}
</style>