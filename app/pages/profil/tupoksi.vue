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
          <h1 class="text-4xl font-bold">Tupoksi RSUD Dr. Soetomo</h1>
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
        <Tupoksi />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import Tupoksi from "~/components/profil/tupoksi/Tupoksi.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Profil - Tupoksi" }],
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
