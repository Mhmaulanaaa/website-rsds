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
                  class="rounded-lg border shadow-sm group-hover:shadow-md group-hover:scale-105 transition w-50"
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
const year = "2024";

const awards = [
  {
    image: "/images/penghargaan/2024/tahun-2024-1.jpg",
    nama: "Innovative Government Award (IGA) dengan Predikat Sangat Inovatif",
    tanggal: "11 Desember 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-2.jpg",
    nama: "Rumah Sakit Tercettar dalam Penyelenggaraan RME Terkoneksi Satu Sehat",
    tanggal: "21 November 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-3.jpg",
    nama:
      "Badan Publik Informatif Pada Monitoring dan Evaluasi Keterbukaan Informasi Publik OPD Pemprov Jatim",
    tanggal: "13 November 2024",
    instansi: "Komisi Informasi Provinsi Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-4.jpg",
    nama:
      "Pelaksanaan Pemantauan dan Evaluasi Kinerja Penyelenggaraan Pelayanan Publik (PEKPPP) Provinsi Jawa Timur dengan Predikat Sangat Baik",
    tanggal: "13 November 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-5.jpg",
    nama:
      "Penilaian Budaya CETTAR pada Aplikasi Sistem Integrasi Bersama Kinerja Implementasi Budaya CETTAR (SIBEKISAR) dengan Predikat Sangat CETTAR",
    tanggal: "12 November 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-6.jpg",
    nama:
      "Juara I Perangkat Daerah Rumah Sakit Rencana Tindak Lanjut (RTL) Terbaik Disaster Leadership Academy (DILA)",
    tanggal: "12 November 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-7.jpg",
    nama: "Terbaik I Kategori Perangkat Daerah SATA JATIM Awards 2024",
    tanggal: "23 Oktober 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-8.jpg",
    nama: "Pemenang 3 Kategori 3 Green Hospital",
    tanggal: "19 Oktober 2024",
    instansi: "Persatuan Rumah Sakit Indonesia",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-9.jpg",
    nama: "Pemenang 1 Kategori 7 Quality and Patient Safety",
    tanggal: "19 Oktober 2024",
    instansi: "Persatuan Rumah Sakit Indonesia",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-10.jpg",
    nama: "Excellence Award Kategori 7 Quality and Patient Safety",
    tanggal: "19 Oktober 2024",
    instansi: "Persatuan Rumah Sakit Indonesia",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-11.jpg",
    nama:
      "Rumah Sakit Anggota PERSI yang Telah Menunjukkan Prestasi Kemasyarakatan yang Menonjol Dalam Pengalaman Pelayanan",
    tanggal: "16 Oktober 2024",
    instansi: "Perhimpunan Rumah Sakit Indonesia",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-12.jpg",
    nama:
      "Peringkat Pertama Fasilitas Kesehatan Tingkat Lanjut Berkomitmen dalam Pelayanan Kesehatan Program JKN Tingkat Nasional",
    tanggal: "19 September 2024",
    instansi: "BPJS Kesehatan",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-13.jpg",
    nama:
      "Kategori Rumah Sakit dengan Layanan PDP paling Inovatif dalam Pemeriksaan Viral Load (VL) HIV",
    tanggal: "01 September 2024",
    instansi:
      "Direktorat Jenderal Pencegahan dan Pengendalian Penyakit Kementerian Kesehatan Republik Indonesia",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-14.jpg",
    nama:
      "Peringkat I Unit Organisasi Bersifat Khusus dengan Total Pesanan dan Total Transaksi Terbanyak Bidang Kesehatan dalam Pemanfaatan Pengadaan Barang/Jasa Melalui E-Katalog Lokal Provinsi Jawa Timur",
    tanggal: "20 Agustus 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-15.jpg",
    nama:
      "Kategori Memuaskan sebagai Organisasi Perangkat Daerah Provinsi Jawa Timur Berdasarkan Hasil Pengawasan Kearsipan Internal",
    tanggal: "07 Maret 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
];

function toggle() {
  open.value = !open.value;
}
</script>
