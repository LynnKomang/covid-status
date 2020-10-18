<template>
  <div class="animate__animated animate__fadeInDown">
    <div
      class="text-3xl text-center md:text-5xl md:text-left transition-opacity font-medium mb-3 duration-200"
    >
      Latest statistics
    </div>
    <div
      class="md:flex bg-white shadow rounded-xl divide-dashed divide-y-2 md:divide-x-2 md:divide-y-0 divide-gray-400"
    >
      <InfoCard :number="info.NewDeaths" title="New deaths 💀️" />
      <InfoCard :number="info.NewConfirmed" title="New cases 😷️" />
      <InfoCard :number="info.NewRecovered" title="New recovered 😁️" />
    </div>
  </div>
</template>

<script>
import { getDetails } from "../ApiRequests";
import InfoCard from "./InfoCard";

export default {
  data() {
    return {
      info: {},
    };
  },
  components: {
    InfoCard,
  },
  mounted() {
    getDetails("Israel").then((response) => {
      this.info = response;
    });
  },
};
</script>