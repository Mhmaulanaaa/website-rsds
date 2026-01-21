<template>
  <div class="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">
    <!-- DIREKTUR UTAMA -->
    <div class="flex justify-center mb-12">
      <div
        class="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center max-w-md"
      >
        <img
          src="/images/profil/dirRsds.png"
          alt="Direktur RSUD Dr. Soetomo"
          class="w-75 mx-auto rounded-2xl shadow-md"
        />

        <!-- <h2 class="mt-6 text-lg font-bold text-gray-900">
          Prof. Dr. Cita Rosita Sigit Prakoeswa, dr., Sp.DVE., Subsp.DAI., FINS-DV.,
          FAADV., M.A.R.S.
        </h2> -->

        <p class="mt-2 text-emerald-600 font-semibold">Direktur RSUD Dr. Soetomo</p>
      </div>
    </div>

    <!-- WAKIL DIREKTUR -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(item, index) in wakilDirektur"
        :key="index"
        class="bg-white rounded-2xl shadow border border-gray-100 p-6 text-center"
      >
        <img
          :src="item.foto"
          :alt="item.nama"
          class="w-55 mx-auto rounded-xl shadow-sm"
        />

        <!-- <h3 class="mt-4 font-semibold text-gray-900 text-sm">
          {{ item.nama }}
        </h3> -->

        <p class="mt-1 text-sm text-emerald-600 font-medium">
          {{ item.jabatan }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const wakilDirektur = [
  {
    nama: "Tjipto Prasetyo Nugroho, Ak.",
    jabatan: "Wakil Direktur Umum dan Operasional",
    foto: "/images/profil/wadirUo.png",
  },
  {
    nama: "Primada Kusumaninggar, drg., M.Kes., M.A.R.S.",
    jabatan: "Wakil Direktur Perencanaan dan Keuangan",
    foto: "/images/profil/wadirPk.png",
  },
  {
    nama: "Dr. Damayanti Tinduh, dr., Sp.KR(K).",
    jabatan: "Wakil Direktur Pendidikan, Penelitian dan SDM",
    foto: "/images/profil/wadirP3sdm.png",
  },
  {
    nama: "Prof. Dr. Ahmad Suryawan, dr., Sp.A(K).",
    jabatan: "Wakil Direktur Pelayanan Medik dan Keperawatan",
    foto: "/images/profil/wadirPmk.png",
  },
];
</script>
