<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { Chart, registerables } from "chart.js";
import { onMounted } from "vue";

Chart.register(...registerables);

onMounted(() => {
  const ctx = (
    document.getElementById("myChart") as HTMLCanvasElement
  ).getContext("2d");
  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
});
</script>
