<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
    <!-- PIE CHART -->
    <div class="bg-white rounded-xl shadow p-6 flex flex-col">
      <h3 class="font-semibold text-slate-700 mb-4">Total SDM Berdasar Jenis Kelamin</h3>

      <div class="flex-1 flex items-center justify-center">
        <Pie :data="chartData" :options="chartOptions" />
      </div>
    </div>

    <!-- TABLE -->
    <div class="bg-blue-50 rounded-xl p-6 flex flex-col">
      <h3 class="font-semibold text-slate-700 mb-4">Total SDM Berdasar Jenis Kelamin</h3>

      <div class="flex-1">
        <table class="w-full text-sm">
          <thead class="bg-blue-100 text-blue-800">
            <tr>
              <th class="px-4 py-2 text-left">Jenis Kelamin</th>
              <th class="px-4 py-2 text-right">Jumlah</th>
              <th class="px-4 py-2 text-right">Persentase</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="row in rows" :key="row.nama" class="last:border-0">
              <td class="px-4 py-2">{{ row.nama }}</td>
              <td class="px-4 py-2 text-right">{{ row.jumlah }}</td>
              <td class="px-4 py-2 text-right">{{ row.persen }}</td>
            </tr>

            <tr class="font-semibold bg-blue-100">
              <td class="px-4 py-2">Total</td>
              <td class="px-4 py-2 text-right">3622</td>
              <td class="px-4 py-2 text-right">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

/**
 * DATA SESUAI PERMINTAAN
 * TANPA HITUNG ULANG PERSENTASE
 */
const rows = [
  { nama: "Pegawai Laki-Laki", jumlah: 1275, persen: "35,20%" },
  { nama: "Pegawai Perempuan", jumlah: 2347, persen: "64,80%" },
];

const chartData = {
  labels: rows.map((r) => r.nama),
  datasets: [
    {
      data: rows.map((r) => r.jumlah),
      backgroundColor: [
        "#2563eb", // Laki-laki
        "#ec4899", // Perempuan
      ],
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
    datalabels: {
      color: "#fff",
      font: {
        weight: "bold",
        size: 14,
      },
      formatter: (_, ctx) => rows[ctx.dataIndex].persen,
    },
  },
};
</script>
