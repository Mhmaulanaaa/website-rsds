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
const year = "2025";

const awards = [
  {
    image: "/images/penghargaan/2025/tahun-2025-1.jpg",
    nama: "Sata Jatim Awards 2025 (Terbaik 1 Kategori Rumah Sakit)",
    tanggal: "08 November 2025",
    instansi: "SATA JATIM 2025",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-2.jpg",
    nama: "Indonesia Healthcare Innovation Award IHIA VIII - 2025 DIAMOND AWARD",
    tanggal: "23 Oktober 2025",
    instansi: "IHIA",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-3.jpg",
    nama: "Seva Paramahita Award",
    tanggal: "09 Oktober 2025",
    instansi: "BPJS Kesehatan",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-4.jpg",
    nama: "Persi Award (Pemenang 4 Kategori 8 : Innovation Healthcare IT)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-5.jpg",
    nama: "Persi Award (Pemenang 1 Kategori 6 : Leadership and Management)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-6.jpg",
    nama: "Persi Award (Pemenang 2 Kategori 3 : Green Hospital)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-7.jpg",
    nama: "Persi Award (Pemenang 2 Kategori 2 : Corporate Social Responsibility)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-8.jpg",
    nama: "Persi Award (Pemenang 1 Kategori 4 : Health Services During Crisis)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-9.jpg",
    nama: "Persi Award (12 Rumah Sakit Terbaik Bidang Layanan Saraf)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-10.jpg",
    nama: "Persi Award (12 Rumah Sakit Terbaik Layanan Kanker)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-11.jpg",
    nama: "Persi Award (Grand Hospital Award Kategori 4 Health Services During Crisis)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-12.jpg",
    nama:
      "Percepatan Layanan Instalasi Gawat Darurat RSUD Dr. Soetomo Melalui Pengembangan Kewaspadaan Kolektif Turn Around Time Antar Titik Pelayanan (TaTaTaP)",
    tanggal: "27 September 2025",
    instansi: "PERSI AWARD",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-13.jpg",
    nama:
      "Recognition of its Achievement in Implementing the Guidelines for Patient Centered Care Services and Integrated Patient Care",
    tanggal: "12 Agustus 2025",
    instansi:
      "Patient Care Centered Institute dan The Indonesian Commission on Accreditation of Hospitals (KARS)",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-14.jpg",
    nama:
      "Penghargaan Perpustakaan Perangkat Daerah di Lingkungan Pemerintah Provinsi Jawa Timur Sesuai dengan Standart Nasional Perpustakaan Tahun 2025",
    tanggal: "21 Mei 2025",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-15.jpg",
    nama:
      "Perpustakaan Perangkat Daerah di Lingkungan Pemerintah Provinsi Jawa Timur Sesuai dengan Standar Nasional Perpustakaan Tahun 2025",
    tanggal: "21 Mei 2025",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-16.jpg",
    nama:
      "Wajib Pajak Instansi Pemerintah dengan Kontribusi Pembayaran Terbesar Tahun 2024 di KPP Pratama Surabaya Gubeng",
    tanggal: "09 Mei 2025",
    instansi: "Direktur Jendral Pajak KPP Pratama Surabaya Gubeng",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-17.jpg",
    nama:
      "Kategori I Capaian Updating Data SIMASTER Dalam Layanan Kepegawaian Dengan 26 Item Kepegawaian & Penyelesaian Disparitas Data SIASN-SIMASTER",
    tanggal: "20 Januari 2025",
    instansi: "BKD JATIM",
    penerima: "RSUD Dr. Soetomo",
  },
];

function toggle() {
  open.value = !open.value;
}
</script>
