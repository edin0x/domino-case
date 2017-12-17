<script>
  import { Bar } from 'vue-chartjs';

  export default {
    extends: Bar,
    name: "bar-chart",
    props: ['chartData'],
    mounted() {
      this.renderChart({
        labels: this.chartData.map(d => d.label),
        datasets: [
          {
            backgroundColor: 'steelblue',
            data: this.chartData.map(d => d.value),
          },
        ],
        scales: {
          xAxes: [ {
            categoryPercentage: 2.9,
            barPercentage: 20
          }]
        }
      }, {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1.5
          }]
        },
        legend: {
          display: false,
        }
      });
    },
    watch: {
      chartData() {

      }
    }
  }
</script>
