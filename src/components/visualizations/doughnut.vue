<script>
  import { Doughnut } from 'vue-chartjs';

  const colors = {
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
  };

  export default {
    extends: Doughnut,
    name: "doughnut",
    props: ['chartData'],
    data() {
      return {
        renderData: {
          labels: this.chartData.map(d => d.label),
          datasets: [
            {
              data: this.chartData.map(d => d.value),
              backgroundColor: colors.backgroundColor,
              borderColor: colors.borderColor,
              borderWidth: 1
            }
          ]
        },
        renderOptions: {
          responsive: true,
          maintainAspectRatio: false
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
