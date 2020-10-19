<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveData } = mixins;

export default {
  extends: Line,
  mixins: [reactiveData],
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      options: {
        animation: {
          duration: 0, // general animation time
        },
        responsiveAnimationDuration: 0, // animation duration after a resize
      },
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>