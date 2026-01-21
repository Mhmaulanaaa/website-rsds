<template>
  <div class="space-y-4">
    <!-- ACCORDION HEADER -->
    <button
      @click="toggle"
      class="w-full flex justify-between items-center bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition"
    >
      <h2 class="text-lg font-semibold text-slate-800">
        {{ year }}
      </h2>

      <span
        class="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-lg font-bold transition-transform duration-300"
        :class="{ 'rotate-180': open }"
      >
        <i :class="open ? 'fas fa-minus' : 'fas fa-plus'"></i>
      </span>
    </button>

    <!-- ACCORDION CONTENT -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[2000px]"
      leave-from-class="opacity-100 max-h-[2000px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-if="open"
        class="bg-white rounded-xl shadow-sm p-6 space-y-6 overflow-hidden"
      >
        <!-- ITEM CARD -->
        <div
          v-for="(item, index) in awards"
          :key="index"
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <!-- IMAGE -->
            <div class="flex justify-center">
              <a
                :href="item.image"
                target="_blank"
                rel="noopener noreferrer"
                class="group"
              >
                <img
                  :src="item.image"
                  alt="Penghargaan"
                  class="rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-105 transition w-50"
                />
              </a>
            </div>
            <!-- CONTENT -->
            <div class="md:col-span-2">
              <ul class="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>
                  <strong>Nama Penghargaan :</strong>
                  {{ item.nama }}
                </li>
                <li>
                  <strong>Diterima Tanggal :</strong>
                  {{ item.tanggal }}
                </li>
                <li>
                  <strong>Instansi yang Mengeluarkan Penghargaan :</strong>
                  {{ item.instansi }}
                </li>
                <li>
                  <strong>Penerima :</strong>
                  {{ item.penerima }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
const year = "2022";

const awards = [
  {
    image: "/images/penghargaan/2022/tahun-2022-1.png",
    nama:
      "Penghargaan Program Penilaian Peringkat Kinerja Perusahaan Dalam Pengelolaan Lingkungan Hidup Peringkat Biru",
    tanggal: "29 Desember 2022",
    instansi: "Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-2.png",
    nama: "RSUD Dr. Soetomo atas Peran serta Pengembangan Penelitian",
    tanggal: "16 Desember 2022",
    instansi: "Sekolah Pascasarjana Universitas Airlangga",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-3.png",
    nama:
      "Top 30 Kompetisi Inovasi Pelayanan Publik (Kovablik) Telenutrition untuk Mendukung ASI Eksklusif di Ruang Neonatus RSUD Dr. Soetomo",
    tanggal: "02 Desember 2022",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-4.png",
    nama:
      "Rumah Sakit dengan Kemandirian di Bidang Farmasi Terbaik untuk Mendukung Kemandirian Kesehatan Indonesia (Vaksin Merah Putih) dalam Anugerah Prioritas Nasional",
    tanggal: "01 Desember 2022",
    instansi: "Anugerah Prioritas Nasional",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-5.png",
    nama:
      "Telah Memenuhi Kualifikasi sebagai Institusi Penyelenggara Pelatihan Bidang Kesehatan Terakreditasi A",
    tanggal: "30 November 2022",
    instansi: "Direktur Jenderal Tenaga Kesehatan",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-6.png",
    nama: "Telah Memenuhi Persyaratan Kesehatan Lingkungan dengan Predikat Sangat Baik",
    tanggal: "09 November 2022",
    instansi: "Menteri Kesehatan",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-7.png",
    nama:
      "Anugerah BAPETEN 2022 pada Bidang Keselamatan dan Keamanan Nuklir dalam Kegiatan Kedokteran Nuklir",
    tanggal: "05 November 2022",
    instansi: "Plt. Kepala Badan Pengawas Tenaga Nuklir",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-8.png",
    nama:
      "Penilaian Budaya CETTAR pada Aplikasi Sistem Integrasi Bersama Kinerja Implementasi Budaya CETTAR (SIBEKISAR) Tahun 2021 dengan Predikat CETTAR",
    tanggal: "27 Oktober 2022",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-9.png",
    nama: "RSUD Dr. Soetomo Lulus Akreditasi KARS Tingkat Paripurna",
    tanggal: "30 September 2022",
    instansi: "Komisi Akreditasi Rumah Sakit",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-10.png",
    nama:
      "Partisipasi dan Peran Aktif dalam Tugas Penanganan Corona Virus Disease (Covid-19) di Indonesia",
    tanggal: "17 Agustus 2022",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-11.png",
    nama:
      "Apresiasi dalam Penanganan Pandemi Covid-19 dan Bencana Alam di Wilayah Jawa Timur",
    tanggal: "04 Juli 2022",
    instansi: "Kepolisian Daerah Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
];

function toggle() {
  open.value = !open.value;
}
</script>
