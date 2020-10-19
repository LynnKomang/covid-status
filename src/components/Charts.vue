<template>
  <div class="bg-white shadow rounded-lg p-5">
    <Chart v-if="cases.length > 0" :chartdata="preparedCases" />
  </div>
</template>

<script>
import { getAllCases } from "../ApiRequests";
import Chart from "./Chart";

export default {
  components: {
    Chart,
  },
  data() {
    return {
      cases: [],
    };
  },
  computed: {
    preparedCases() {
      const preparedCases = {};

      preparedCases["labels"] = this.cases.map((c, i) =>
        i % 10 == 0 ? c.Date : ""
      );

      preparedCases["datasets"] = [
        {
          label: "Confirmed",
          borderColor: "#4495E3 ",
          data: this.cases.map((c) => c.Confirmed),
        },
        {
          label: "Recovered",
          borderColor: "#82E643",
          data: this.cases.map((c) => c.Recovered),
        },
        {
          label: "Deaths",
          borderColor: "#D6624A",
          data: this.cases.map((c) => c.Deaths),
        },
      ];

      return preparedCases;
    },
  },
  mounted() {
    getAllCases("israel").then((response) => {
      this.cases = response;
    });
  },
};
</script>