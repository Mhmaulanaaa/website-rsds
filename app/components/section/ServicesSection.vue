<template>
  <section class="relative overflow-hidden py-5">
    <!-- BG -->
    <!-- CONTENT -->
    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- CATEGORY : Layanan Unggulan -->
      <div class="mb-24 text-center">
        <!-- HEADER -->
        <div class="flex flex-col items-center gap-4 mb-12">
          <div
            class="flex items-center justify-center rounded-xl text-white font-bold text-lg"
          >
            <img src="/images/layung.svg" alt="Logo" class="h-40 mb-5" />
          </div>
        </div>

        <!-- CARDS -->
        <div class="flex flex-wrap justify-center gap-8">
          <ServiceCard
            v-for="item in unggulan"
            :key="item.title"
            :item="item"
            class="w-full max-w-sm"
          />
        </div>
      </div>

      <!-- End Layanan Unggulan -->

      <!-- CATEGORY : Rujukan Nasional -->
      <div>
        <!-- HEADER -->
        <div class="flex flex-col items-center gap-4 mb-12 text-center">
          <div
            class="flex items-center justify-center rounded-xl text-white font-bold text-lg"
          >
            <img src="/images/runas.svg" alt="Logo" class="h-40 mb-5" />
          </div>
        </div>

        <!-- GRID + ANIMATION -->
        <TransitionGroup
          name="fade-slide"
          tag="div"
          class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <ServiceCard v-for="item in visibleRujukan" :key="item.title" :item="item" />
        </TransitionGroup>

        <!-- BUTTON -->
        <div class="flex justify-center mt-12">
          <button
            @click="toggleShow"
            class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
          >
            {{ showAll ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya" }}
            <span
              class="transition-transform duration-300"
              :class="showAll ? 'rotate-180' : ''"
            >
              ▼
            </span>
          </button>
        </div>
      </div>
      <!-- End Rujukan Nasional -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ServiceCard from "../cards/ServiceCard.vue";

const showAll = ref(false);

const visibleRujukan = computed(() => (showAll.value ? rujukan : rujukan.slice(0, 8)));

const toggleShow = () => {
  showAll.value = !showAll.value;
};

const unggulan = [
  {
    title: "Immunotherapy Clinic",
    icon: "/images/layungimuno.png",
    link: "/layanan/immunotherapy",
  },
  {
    title: "Soetomo Aesthetic Clinic",
    icon: "/images/layungestetik.png",
    link: "/layanan/aesthetic",
  },
];

const rujukan = [
  {
    title: "Pelayanan Bank Jaringan",
    icon: "/images/rnPbjrm.png",
    link: "/rujukan/bankjaringan",
  },
  {
    title: "Pelayanan Bayi Tabung",
    icon: "/images/rnPbt.png",
    link: "/rujukan/bayitabung",
  },
  {
    title: "Pelayanan Endoskopi dan Minimal Invasif",
    icon: "/images/rnPemi.png",
    link: "/rujukan/endoskopi",
  },
  {
    title: "Pelayanan Endokrin Terintegrasi",
    icon: "/images/rnPet.png",
    link: "/rujukan/endokrin",
  },
  {
    title: "Pelayanan Ginjal Terpadu",
    icon: "/images/rnPgit.png",
    link: "/rujukan/ginjalterpadu",
  },
  {
    title: "Pelayanan Geriatri Terpadu",
    icon: "/images/rnPgt.png",
    link: "/rujukan/geriatriterpadu",
  },
  {
    title: "Pelayanan Penyakit Infeksi Emerging dan Re-Emerging",
    icon: "/images/rnPinere.png",
    link: "/rujukan/penyakitinfeksi",
  },
  {
    title: "Pelayanan Kembar Siam",
    icon: "/images/rnPks.png",
    link: "/rujukan/kembarsiam",
  },
  // 1
  {
    title: "Pelayanan Ortorik Prosterik",
    icon: "/images/rnPop.png",
    link: "/rujukan/bankjaringan",
  },
  {
    title: "Pelayanan Paliatif dan Bebas Nyeri",
    icon: "/images/rnPpbn.png",
    link: "/rujukan/bayitabung",
  },
  {
    title: "Pelayanan Sport Clinic",
    icon: "/images/rnPsc.png",
    link: "/rujukan/endoskopi",
  },
  {
    title: "Pelayanan Sistem Saraf Terintegrasi",
    icon: "/images/rnPsst.png",
    link: "/rujukan/endokrin",
  },
  {
    title: "Pelayanan Tumbuh Kembang Anak",
    icon: "/images/rnPtka.png",
    link: "/rujukan/ginjalterpadu",
  },
  {
    title: "Program Pencegahan Resistensi Antimikroba",
    icon: "/images/rnPpra.png",
    link: "/rujukan/geriatriterpadu",
  },
  {
    title: "Pusat Pelayanan Jantung Terpadu",
    icon: "/images/rnPpjt.png",
    link: "/rujukan/penyakitinfeksi",
  },
  {
    title: "Pusat Pengembangan Layanan Kanker",
    icon: "/images/rnPplk.png",
    link: "/rujukan/kembarsiam",
  },
];
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
