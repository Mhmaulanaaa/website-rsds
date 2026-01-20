<template>
  <!-- GRADIENT WRAPPER -->
  <section class="relative overflow-hidden py-1">
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- ================= Innovasi ================= -->
      <div class="mb-10">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Inovasi</h2>
          <!-- <p class="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Informasi terbaru seputar inovasi, layanan unggulan, dan kegiatan RSUD Dr.
            Soetomo Surabaya
          </p> -->
        </div>

        <!-- GRID -->
        <TransitionGroup
          name="fade-down"
          tag="div"
          class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div
            v-for="item in visibleInovasi"
            :key="item.title"
            class="group rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-100œ hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)]"
          >
            <!-- Image -->
            <div class="relative">
              <img
                :src="item.image"
                class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <!-- Soft overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              ></div>
            </div>

            <!-- Content -->
            <div class="p-6 text-center">
              <h3
                class="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition"
              >
                {{ item.title }}
              </h3>

              <p class="mt-3 text-sm text-gray-500 line-clamp-2">
                Inovasi pelayanan dan peningkatan mutu layanan kesehatan RSUD Dr. Soetomo.
              </p>
            </div>
          </div>
        </TransitionGroup>

        <!-- Button -->
        <div class="mt-16 text-center">
          <!-- <button
            @click="toggleShowInovasi"
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
          <button
            class="inline-flex items-center mt-2 gap-2 px-8 py-3 rounded-full border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-600 hover:text-white transition text-sm"
          >
            Semua Innovasi
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const showAll = ref(false);

const visibleInovasi = computed(() => (showAll.value ? inovasi : inovasi.slice(0, 4)));

const toggleShowInovasi = () => {
  showAll.value = !showAll.value;
};

const inovasi = [
  {
    title: "Inovasi dan Dedikasi ASN RSUD Dr. Soetomo",
    image: "/images/rsds1.jpg",
  },
  {
    title: "Inovasi Duta ASI untuk Ibu & Anak",
    image: "/images/rsds1.jpg",
  },
  {
    title: "Inovasi ABI (Alat Bantu Ibu) untuk IMD",
    image: "/images/rsds1.jpg",
  },
  {
    title: "Inovasi IHA CIAMIK Pelayanan Terpadu",
    image: "/images/rsds1.jpg",
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
  transform: translateY(20px);
}

.fade-down-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
