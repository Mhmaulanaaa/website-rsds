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
const year = "2021";

const awards = [
  {
    image: "/images/penghargaan/2021/tahun-2021-1.png",
    nama:
      "Terbaik Pertama atas Prestasi dan Dedikasi dalam Menjalankan Program Pengendalian Resistensi Antimikroba (PPRA) di Rumah Sakit",
    tanggal: "24 November 2021",
    instansi: "Provinsi Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2021/tahun-2021-2.png",
    nama:
      "Narasumber dalam Podcast Dialog Pakar BPSDM Provinsi Jawa Timur pada Pameran & Simposium Inovasi Pelayanan Publik Jawa Timur Tahun 2021",
    tanggal: "19 November 2021",
    instansi: "BPSDM Provinsi Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2021/tahun-2021-3.png",
    nama:
      "Top 30 Kompetisi Inovasi Pelayanan Publik (KOVABLIK) Provinsi Jawa Timur Tahun 2021",
    tanggal: "15 November 2021",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2021/tahun-2021-4.png",
    nama: "Pelaksanaan Percepatan Reformasi Birokrasi",
    tanggal: "27 Oktober 2021",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2021/tahun-2021-5.png",
    nama: "Penerapan Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)",
    tanggal: "27 Oktober 2021",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2021/tahun-2021-6.png",
    nama:
      "Fasilitas Kesehatan Tingkat Lanjutan Paling Berkomitmen dalam Memberikan Pelayanan Terbaik bagi Peserta JKN-KIS Kategori Rumah Sakit Tipe A",
    tanggal: "07 September 2021",
    instansi: "BPJS Kesehatan",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
];

function toggle() {
  open.value = !open.value;
}
</script>
