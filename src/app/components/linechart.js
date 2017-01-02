import { Line } from 'vue-chartjs';

export default Line.extend({
  props: ['labels', 'datasets'],
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets,
    }, {
      // Boolean - If we should show the scale at all
      // Boolean - whether to make the chart responsive to window resizing
      responsive: true,
      legend: {
        display: false,
      },
    });
  }
});
