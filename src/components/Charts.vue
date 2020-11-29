<template>
  <div>
    <div class="text-3xl text-center md:text-5xl md:text-left font-medium mb-3">
      Graphs
    </div>
    <div
      v-if="cases.length > 0"
      class="bg-white shadow rounded-lg p-5 grid gap-5 grid-cols-1 lg:grid-cols-3 items-center"
    >
      <Chart :chartdata="confirmedAndRecovered" />
      <Chart :chartdata="active" />
      <Chart :chartdata="deaths" />
    </div>
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
    labels() {
      return this.cases.map((c) => c.Date);
    },
    confirmedAndRecovered() {
      const preparedCases = {};

      preparedCases["labels"] = this.labels;

      preparedCases["datasets"] = [
        {
          label: "Confirmed",
          borderColor: "#EDC147",
          data: this.cases.map((c) => c.Confirmed),
        },
        {
          label: "Recovered",
          borderColor: "#82E643",
          data: this.cases.map((c) => c.Recovered),
        },
      ];

      return preparedCases;
    },
    active() {
      const preparedCases = {};

      preparedCases["labels"] = this.labels;

      preparedCases["datasets"] = [
        {
          label: "Active",
          borderColor: "#4495E3",
          data: this.cases.map((c) => c.Active),
        },
      ];

      return preparedCases;
    },
    deaths() {
      const preparedCases = {};

      preparedCases["labels"] = this.labels;

      preparedCases["datasets"] = [
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