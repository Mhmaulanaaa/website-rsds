<template>
  <div class="relative p-4 sm:p-5 lg:p-8">
    <!-- IMAGE -->
    <div class="rounded-2xl overflow-hidden">
      <img
        src="/images/profil/profil_tupoksi_tupoksiRsds.jpg"
        alt="Tupoksi RSUD Dr. Soetomo"
        class="w-full h-auto object-cover sm:object-fill rounded-2xl"
      />
    </div>

    <!-- DESCRIPTION -->
    <div
      class="mt-4 sm:mt-6 text-gray-700 leading-relaxed text-justify text-sm sm:text-base"
    >
      <!-- Tugas Pokok -->
      <h2 class="text-lg sm:text-xl font-semibold mb-2">Tugas Pokok</h2>
      <p class="mb-4">
        Melaksanakan upaya kesehatan secara berdaya guna dan berhasil guna dengan
        mengutamakan upaya penyembuhan dan pemulihan yang dilaksanakan secara serasi dan
        terpadu dengan upaya peningkatan, pencegahan dan penyelenggaraan upaya rujukan
        serta penyelenggaraan pendidikan, pelatihan dan pengembangan kesehatan.
      </p>

      <!-- Fungsi -->
      <h2 class="text-lg sm:text-xl font-semibold mb-2">Fungsi</h2>
      <ul class="list-disc pl-5 space-y-1">
        <li>Pelayanan asuhan pasien secara profesional</li>
        <li>
          Penyelenggaraan pendidikan dan penelitian dalam rangka pengembangan pelayanan
          kesehatan
        </li>
        <li>Pengelolaan manajemen sumber daya secara efektif dan efisien</li>
        <li>Penyelenggaraan dukungan penanganan masalah kesehatan masyarakat</li>
        <li>Pelaksanaan program kesehatan nasional</li>
        <li>Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas</li>
      </ul>
    </div>
    <div
      class="relative bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-10 shadow-lg mt-10"
    >
      <!-- Icon -->
      <div
        class="absolute -top-6 left-10 w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg"
      >
        <i class="fas fa-book"></i>
      </div>

      <div class="pt-8">
        <h3 class="text-2xl font-bold text-gray-900">Sumber</h3>
        <p class="mt-3 text-gray-600 max-w-2xl">
          Peraturan Gubernur Jawa Timur Nomor 113 Tahun 2021 tentang Nomenklatur, Susunan
          Organisasi, Uraian Tugas dan Fungsi serta Tata Kerja Rumah Sakitr Umum Daerah
          Dr. Soetomo
        </p>

        <!-- ACTION -->
        <div class="mt-6">
          <a
            href="/file/company-profile-rsud-soetomo.pdf"
            target="_blank"
            class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
          >
            <span>Download Peraturan</span>
            <span class="text-lg">⤓</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Tidak ada perubahan script, semua statis
</script>
