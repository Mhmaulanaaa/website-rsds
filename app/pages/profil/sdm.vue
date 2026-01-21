<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-7xl mx-auto px-6 mt-10">
      <Breadcrumb />
    </div>
    <!-- HERO -->
    <div class="max-w-7xl mx-auto px-6 py-5">
      <div class="relative bg-emerald-600 rounded-3xl p-10 text-white overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-500 opacity-90"
        ></div>

        <div class="relative z-10 max-w-3xl">
          <h1 class="text-4xl font-bold">Sumber Daya Manusia RSUD Dr. Soetomo</h1>
          <p class="mt-3 text-emerald-100">Rumah Sakit Pendidikan dan Rujukan Nasional</p>
        </div>

        <!-- Pattern Accent -->
        <div
          class="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
        ></div>
        <img
          src="/images/logo/logo_white.png"
          alt="Logo RSUD"
          class="absolute left-1 top-1/2 w-40 -rotate-1 opacity-10 -translate-y-1/2 pointer-events-none"
        />
      </div>
    </div>

    <!-- CONTENT -->
    <div class="max-w-7xl mx-auto px-6">
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <div class="overflow-hidden">
          <TotalSDM />
        </div>
        <div class="overflow-hidden mt-5">
          <TotalSDMAsn />
        </div>
        <div class="overflow-hidden mt-5">
          <TotalSDMJenisJabatan />
        </div>
        <div class="overflow-hidden mt-5">
          <TotalSDMPendidikan />
        </div>
        <div class="overflow-hidden mt-5">
          <TotalSDMJenisKelamin />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import TotalSDM from "~/components/profil/sdm/chart/TotalSDM.vue";
import TotalSDMAsn from "~/components/profil/sdm/chart/TotalSDMAsn.vue";
import TotalSDMJenisJabatan from "~/components/profil/sdm/chart/TotalSDMJenisJabatan.vue";
import TotalSDMPendidikan from "~/components/profil/sdm/chart/TotalSDMPendidikan.vue";
import TotalSDMJenisKelamin from "~/components/profil/sdm/chart/TotalSDMJenisKelamin.vue";
definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Profil - Sumber Daya Manusia" }],
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
