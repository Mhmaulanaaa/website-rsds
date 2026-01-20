<template>
  <div class="pt-20 pb-6 bg-transparent">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Logos -->
      <div class="mb-6 bg-gray-100 shadow">
        <div class="px-6 py-10 flex flex-wrap justify-center items-center gap-8">
          <a
            v-for="(item, index) in logos"
            :key="index"
            :href="item.url"
            target="_blank"
            class="transition-transform hover:scale-110"
          >
            <img :src="item.img" :alt="item.alt" class="h-26 w-auto object-contain" />
          </a>
        </div>
      </div>

      <!-- Info -->
      <div class="text-center mt-6">
        <h2 class="text-2xl font-bold mb-3">
          RSUD Dr. Soetomo, Pemerintah Provinsi Jawa Timur
        </h2>

        <p class="text-gray-700 leading-relaxed max-w-4xl mx-auto">
          <b>Alamat :</b>
          <span class="text-green-600 font-semibold hover:text-yellow-500">
            Jl. Mayjend. Prof. Dr. Moestopo No. 6-8, Gubeng, Surabaya 60286
          </span>
          <br />

          <b>Telepon :</b>
          <span class="text-green-600 font-semibold hover:text-yellow-500"> 1500995 </span
          >;
          <b> WhatsApp :</b>
          <a
            href="https://wa.me/6281216700101"
            target="_blank"
            class="text-green-600 font-semibold hover:text-yellow-500"
          >
            +62 812 1670 0101
          </a>
          (Hanya Menerima Pesan Pengaduan)
          <br />

          <b>Email :</b>
          <span class="text-green-600 font-semibold hover:text-yellow-500">
            kontak.rsudrsoetomo@jatimprov.go.id
          </span>
        </p>

        <!-- Social -->
        <div class="flex justify-center gap-3 py-4">
          <a
            v-for="social in socials"
            :key="social.url"
            :href="social.url"
            target="_blank"
            :class="social.class"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-sm text-gray-700 mt-4">
        <strong>© 2026</strong>
        Instalasi Teknologi Komunikasi dan Informasi, RSUD Dr. Soetomo
        <span class="mx-2">•</span>
        <a
          href="https://rsudrsoetomo.jatimprov.go.id/kebijakan-privasi"
          class="text-green-600 hover:text-yellow-500 font-semibold"
        >
          Kebijakan & Privasi
        </a>
        <span class="mx-2">•</span>
        <a
          href="https://rsudrsoetomo.jatimprov.go.id/faq"
          class="text-green-600 hover:text-yellow-500 font-semibold"
        >
          FAQ
        </a>
        <span class="mx-2">•</span>
        <a
          href="https://rsudrsoetomo.jatimprov.go.id/faq"
          class="text-green-600 hover:text-yellow-500 font-semibold"
        >
          Site Map
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  {
    url: "https://jatimprov.go.id/",
    img: "/images/pemprovjatim2.png",
    alt: "Pemprov Jatim",
  },
  {
    url: "https://dinkes.jatimprov.go.id/",
    img: "/images/dinkesjatim.png",
    alt: "Dinkes Jatim",
  },
  {
    url: "https://kominfo.jatimprov.go.id/",
    img: "/images/diskominfojatim.png",
    alt: "Diskominfo Jatim",
  },
  {
    url: "https://ppid.jatimprov.go.id/",
    img: "/images/ppidjatim.png",
    alt: "PPID Jatim",
  },
  {
    url: "https://spse.inaproc.id/jatimprov",
    img: "/images/inaprocspse.png",
    alt: "INAPROC",
  },
  { url: "https://www.lapor.go.id/", img: "/images/lapor.png", alt: "LAPOR" },
  { url: "https://sippn.menpan.go.id/", img: "/images/sippn.png", alt: "SIPPN" },
  { url: "https://kemkes.go.id/", img: "/images/kemenkes.png", alt: "Kemenkes" },
  { url: "https://komisiinformasi.go.id/", img: "/images/kip.png", alt: "KIP RI" },
];

const socials = [
  {
    url: "https://www.facebook.com/rsudrsoetomo",
    icon: "bi bi-facebook",
    class:
      "w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:opacity-80",
  },
  {
    url: "https://twitter.com/rsudrsoetomo",
    icon: "fab fa-twitter",
    class:
      "w-10 h-10 flex items-center justify-center rounded-lg bg-sky-500 text-white hover:opacity-80",
  },
  {
    url: "https://www.instagram.com/rsudrsoetomo/",
    icon: "fab fa-instagram",
    class:
      "w-10 h-10 flex items-center justify-center rounded-lg bg-pink-500 text-white hover:opacity-80",
  },
  {
    url: "https://www.youtube.com/@RSUDDrSOETOMOSurabaya",
    icon: "fab fa-youtube",
    class:
      "w-10 h-10 flex items-center justify-center rounded-lg bg-red-600 text-white hover:opacity-80",
  },
];
</script>
