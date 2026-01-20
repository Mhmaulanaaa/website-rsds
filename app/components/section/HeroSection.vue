<template>
  <section class="relative h-screen overflow-hidden -mt-0">
    <!-- Background Slides -->
    <transition-group name="fade" tag="div">
      <div
        v-for="(slide, index) in slides"
        v-show="active === index"
        :key="slide.image"
        class="absolute inset-0"
      >
        <img :src="slide.image" class="w-full h-full object-cover" alt="" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"
        ></div>
      </div>
    </transition-group>

    <!-- Content -->
    <div class="relative z-10 flex items-center h-full">
      <div class="max-w-7xl mx-auto px-6">
        <transition name="slide-up" mode="out-in">
          <div :key="active">
            <span
              class="inline-block mb-4 text-sm font-semibold tracking-widest text-green-300"
            >
              {{ slides[active].subtitle }}
            </span>

            <h1 class="text-white text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
              {{ slides[active].title }}
            </h1>

            <p class="mt-6 max-w-xl text-white/90 text-lg">
              {{ slides[active].description }}
            </p>

            <!-- CTA -->
            <div class="mt-10 flex flex-wrap gap-4">
              <button
                class="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
              >
                {{ slides[active].ctaPrimary }}
              </button>

              <button
                class="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                {{ slides[active].ctaSecondary }}
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Arrow Navigation -->
    <button
      @click="prev"
      class="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
    >
      ❮
    </button>

    <button
      @click="next"
      class="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
    >
      ❯
    </button>

    <!-- Dots -->
    <div class="absolute bottom-10 right-10 flex gap-3 z-20">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="active = i"
        class="w-3 h-3 rounded-full transition"
        :class="active === i ? 'bg-white scale-110' : 'bg-white/40'"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const slides = [
  {
    image: "/images/gedung1.webp",
    subtitle: "RS RUJUKAN NASIONAL",
    title: "Pelayanan Kesehatan Terpadu & Profesional",
    description:
      "RSUD Dr. Soetomo memberikan layanan kesehatan bermutu tinggi dengan tenaga medis profesional.",
    ctaPrimary: "Daftar Online",
    ctaSecondary: "Layanan Unggulan",
  },
  {
    image: "/images/gedung2.webp",
    subtitle: "FASILITAS LENGKAP",
    title: "Teknologi Medis Modern & Terpercaya",
    description:
      "Didukung peralatan medis canggih untuk menunjang diagnosis dan perawatan pasien.",
    ctaPrimary: "Lihat Fasilitas",
    ctaSecondary: "Jadwal Dokter",
  },
  {
    image: "/images/gedung3.webp",
    subtitle: "TENAGA AHLI",
    title: "Dokter Spesialis Berpengalaman",
    description:
      "Tim dokter spesialis dan subspesialis dengan kompetensi nasional dan internasional.",
    ctaPrimary: "Cari Dokter",
    ctaSecondary: "Poliklinik",
  },
  {
    image: "/images/gedung4.webp",
    subtitle: "LAYANAN DARURAT",
    title: "IGD 24 Jam Siap Melayani",
    description:
      "Pelayanan gawat darurat 24 jam dengan respon cepat dan sistem terintegrasi.",
    ctaPrimary: "IGD",
    ctaSecondary: "Kontak Darurat",
  },
  {
    image: "/images/gedung5.webp",
    subtitle: "PENDIDIKAN & RISET",
    title: "Rumah Sakit Pendidikan Terdepan",
    description:
      "Fasilitas pendidikan dan riset medis untuk mendukung pengembangan ilmu kesehatan.",
    ctaPrimary: "Program Pendidikan",
    ctaSecondary: "Publikasi Riset",
  },
  {
    image: "/images/gedung6.webp",
    subtitle: "PENUNJANG KESEHATAN",
    title: "Fasilitas Kesehatan Lengkap",
    description: "Laboratorium, Radiologi, Farmasi, dan layanan penunjang lainnya.",
    ctaPrimary: "Layanan Penunjang",
    ctaSecondary: "Jadwal Operasional",
  },
  {
    image: "/images/gedung7.webp",
    subtitle: "KOMITMEN KUALITAS",
    title: "Pelayanan Prima & Kepuasan Pasien",
    description: "Berkomitmen memberikan pelayanan kesehatan terbaik.",
    ctaPrimary: "Testimoni Pasien",
    ctaSecondary: "Hubungi Kami",
  },
  {
    image: "/images/gedung8.webp",
    subtitle: "KESELAMATAN PASIEN",
    title: "Standar Tinggi & Protokol Ketat",
    description: "Menerapkan standar keselamatan pasien di seluruh layanan.",
    ctaPrimary: "Protokol Kesehatan",
    ctaSecondary: "Info Keselamatan",
  },
];

const active = ref(0);
let interval;

const next = () => {
  active.value = (active.value + 1) % slides.length;
};

const prev = () => {
  active.value = active.value === 0 ? slides.length - 1 : active.value - 1;
};

onMounted(() => {
  interval = setInterval(next, 6000);
});

onUnmounted(() => clearInterval(interval));
</script>

<style>
/* Background fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Text animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
