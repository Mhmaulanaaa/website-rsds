<template>
  <section class="relative overflow-hidden py-5">
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- HEADER -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Agenda</h2>
        <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
          Jadwal kegiatan, pelatihan, dan agenda resmi RSUD Dr. Soetomo
        </p>
      </div>

      <!-- AGENDA CARDS -->
      <TransitionGroup
        name="fade-down"
        tag="div"
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(item, index) in visibleAgenda"
          :key="`${item.title}-${index}`"
          class="group grid grid-cols-[90px_1fr] gap-4 transition-all duration-300"
        >
          <!-- DATE -->
          <div
            class="rounded-2xl bg-white border border-white flex flex-col justify-center items-center shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-emerald-300"
          >
            <div class="text-3xl font-bold text-emerald-700">{{ item.day }}</div>
            <div class="text-xs font-semibold text-emerald-600 uppercase">
              {{ item.month }}
            </div>
            <div class="text-xs text-gray-500">{{ item.year }}</div>
          </div>

          <!-- CONTENT -->
          <div
            class="h-full rounded-2xl bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-emerald-100 group-hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)]"
          >
            <div class="p-6 flex flex-col h-full">
              <!-- BADGE -->
              <span
                class="inline-block mb-3 px-2.5 py-0.5 text-xs font-semibold rounded-md w-fit"
                :class="
                  item.status === 'Penting'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-amber-100 text-amber-700'
                "
              >
                {{ item.status }}
              </span>

              <!-- TITLE -->
              <h3
                class="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem] transition-colors group-hover:text-emerald-600"
              >
                {{ item.title }}
              </h3>

              <!-- DESC -->
              <p class="text-gray-600 mb-6 line-clamp-3 min-h-[4.5rem]">
                {{ item.description }}
              </p>

              <!-- FOOTER -->
              <!-- <div class="mt-auto">
                <a
                  href="#"
                  class="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                >
                  Baca Selengkapnya →
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </TransitionGroup>

      <!-- Button -->
      <div class="mt-16 text-center">
        <button
          class="inline-flex items-center mt-2 gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
        >
          Website SICERDAS ↗
        </button>
        <!-- <button
          @click="toggleShowAgenda"
          class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
        >
          {{ showAll ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya" }}
          <span
            class="transition-transform duration-300"
            :class="showAll ? 'rotate-180' : ''"
          >
            ▼
          </span>
        </button> -->
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const showAll = ref(false);

const visibleAgenda = computed(() => (showAll.value ? agenda : agenda.slice(0, 3)));

const toggleShowAgenda = () => {
  showAll.value = !showAll.value;
};
const agenda = [
  {
    day: "28",
    month: "Jan",
    year: "2025",
    status: "Pelatihan",
    title: "Pelatihan Peningkatan Kompetensi Sistem Informasi Rumah Sakit",
    description:
      "Pelatihan internal bagi tenaga kesehatan dan staf pendukung terkait optimalisasi penggunaan Sistem Informasi Manajemen Rumah Sakit (SIMRS).",
  },
  {
    day: "05",
    month: "Feb",
    year: "2025",
    status: "Pendidikan",
    title: "Pendidikan dan Sosialisasi Keamanan Data dan Privasi Pasien",
    description:
      "Kegiatan edukasi bagi seluruh unit kerja mengenai penerapan keamanan informasi dan perlindungan data pasien sesuai standar nasional.",
  },
  {
    day: "12",
    month: "Mar",
    year: "2025",
    status: "Pelatihan",
    title: "Pelatihan Penggunaan Aplikasi SIMRS Versi Terbaru",
    description:
      "Pelatihan teknis bagi tenaga medis dan administrasi terkait fitur dan pembaruan terbaru pada aplikasi SIMRS rumah sakit.",
  },
];
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.45s ease;
}

.fade-down-enter-from {
  opacity: 0;
  transform: translateY(24px);
}

.fade-down-leave-to {
  opacity: 0;
  transform: translateY(24px);
}
</style>
