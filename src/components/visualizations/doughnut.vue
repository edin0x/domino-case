<script>
  import { Doughnut } from 'vue-chartjs';

  export default {
    extends: Bar,
    name: "doughnut",
    props: ['chartData'],
    data() {
      return {
        renderData: {
          labels: this.chartData.map(d => d.label),
          datasets: [
            {
              backgroundColor: 'steelblue',
              data: this.chartData.map(d => d.value),
            },
          ]
        },
        renderOptions: {
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
        }
      }
    },
    mounted() {
      this.renderChart(this.renderData, this.renderOptions);
    },
    watch: {
      chartData() {
        this.renderOptions.maintainAspectRatio = true;
        this.renderChart(this.renderData, this.renderOptions);
      }
    }
  }
</script>
