<template>
  <section class="relative overflow-hidden pt-32 pb-25">
    <!-- BG -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#e6f7f1]"></div>
    <div
      class="absolute left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#a0e7c8]/40 rounded-full blur-3xl"
    ></div>
    <!-- Content Wrapper -->
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Card -->
      <div class="bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] px-10 py-16">
        <!-- TOP SERVICES -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
          <RouterLink
            v-for="item in services"
            :key="item.title"
            :to="item.link"
            class="group text-center rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,197,94,0.25)] hover:bg-green-50"
          >
            <img
              :src="item.icon"
              class="mx-auto h-20 mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              alt=""
            />
            <p
              class="text-sm font-semibold text-green-700 whitespace-pre-line leading-snug transition-colors group-hover:text-green-800"
            >
              {{ item.title }}
            </p>
          </RouterLink>
        </div>

        <!-- Divider -->
        <div
          class="my-16 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"
        ></div>

        <!-- BOTTOM SERVICES -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12">
          <RouterLink
            v-for="item in servicesBottom"
            :key="item.title"
            :to="item.link"
            class="group text-center rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,197,94,0.25)] hover:bg-green-50"
          >
            <img
              :src="item.icon"
              class="mx-auto h-20 mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              alt=""
            />
            <p
              class="text-sm font-semibold text-green-700 whitespace-pre-line leading-snug transition-colors group-hover:text-green-800"
            >
              {{ item.title }}
            </p>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";

const services = [
  {
    title: "Pendaftaran\nOnline",
    icon: "/images/quicklink_pendol.png",
    link: "/pendaftaran-online",
  },
  {
    title: "Ketersediaan\nKamar Rawat Inap",
    icon: "/images/quicklink_inforanap.png",
    link: "/ketersediaan-kamar",
  },
  {
    title: "Hasil Penunjang\n(SIPS)",
    icon: "/images/quicklink_sips.png",
    link: "/hasil-penunjang",
  },
  {
    title: "Daftar Dokter",
    icon: "/images/quicklink_daftardokter.png",
    link: "/daftar-dokter",
  },
  {
    title: "Tarif dan\nKerjasama",
    icon: "/images/quicklink_tarifkerjasama.png",
    link: "/tarif-kerjasama",
  },
  {
    title: "Standar\nPelayanan Publik",
    icon: "/images/quicklink_spp.png",
    link: "/standar-pelayanan",
  },
];

const servicesBottom = [
  {
    title: "Sicerdas",
    icon: "/images/quicklink_pendol.png",
    link: "/pendaftaran-online",
  },
  {
    title: "Pengaduan\nLayanan Publik",
    icon: "/images/quicklink_plp.png",
    link: "/pengaduan",
  },
  {
    title: "Permohonan\nInformasi",
    icon: "/images/quicklink_pi.png",
    link: "/permohonan-informasi",
  },
  {
    title: "Keberatan Atas\nPermohonan Informasi",
    icon: "/images/quicklink_kapi.png",
    link: "/keberatan-informasi",
  },
  {
    title: "PROMs & PREMs",
    icon: "/images/quicklink_promprem.png",
    link: "/proms-prems",
  },
];
</script>
