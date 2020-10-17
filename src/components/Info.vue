<template>
  <div>New Confirmed: {{ info.NewConfirmed }}</div>
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