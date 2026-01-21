<template>
  <div class="p-4 sm:p-6 lg:p-8">
    <div class="bg-white rounded-2xl shadow border border-emerald-100 overflow-hidden">
      <!-- TABLE -->
      <DaftarUnitKerja1 />
    </div>
    <div
      class="bg-white rounded-2xl shadow border border-emerald-100 overflow-hidden mt-5"
    >
      <DaftarUnitKerja2 />
    </div>
    <div
      class="bg-white rounded-2xl shadow border border-emerald-100 overflow-hidden mt-5"
    >
      <DaftarUnitKerja3 />
    </div>
    <div
      class="bg-white rounded-2xl shadow border border-emerald-100 overflow-hidden mt-5"
    >
      <DaftarUnitKerja4 />
    </div>
  </div>
</template>

<script setup lang="ts">
import DaftarUnitKerja1 from "./daftarunitkerja/DaftarUnitKerja1.vue";
import DaftarUnitKerja2 from "./daftarunitkerja/DaftarUnitKerja2.vue";
import DaftarUnitKerja3 from "./daftarunitkerja/DaftarUnitKerja3.vue";
import DaftarUnitKerja4 from "./daftarunitkerja/DaftarUnitKerja4.vue";
</script>
