<template>
  <div class="relative p-4 sm:p-5 lg:p-8">
    <!-- IMAGE -->
    <div class="rounded-2xl overflow-hidden">
      <img
        src="/images/profil/profil_strukturOrganisasi.png"
        alt="Tupoksi RSUD Dr. Soetomo"
        class="w-full h-auto object-cover sm:object-fill rounded-2xl"
      />
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
            <span>Download</span>
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
