<template>
  <div
    class="animate__animated animate__fadeInDown md:flex border-2 border-gray-400 shadow-xl rounded-lg divide-y md:divide-x md:divide-y-0 divide-gray-400"
  >
    <div class="text-center mx-auto pb-4 w-full">
      <div class="text-6xl">{{ info.NewDeaths }}</div>
      <div class="text-3xl">New deaths 💀️</div>
    </div>

    <div class="text-center mx-auto pb-4 w-full">
      <div class="text-6xl">{{ info.NewConfirmed }}</div>
      <div class="text-3xl">New cases 😷️</div>
    </div>

    <div class="text-center mx-auto pb-4 w-full">
      <div class="text-6xl">{{ info.NewRecovered }}</div>
      <div class="text-3xl">New recovered 😁️</div>
    </div>
  </div>
</template>

<script>
import { getDetails } from "../ApiRequests";

export default {
  data() {
    return {
      info: {},
    };
  },
  mounted() {
    getDetails("Israel").then((response) => {
      this.info = response;
    });
  },
};
</script>