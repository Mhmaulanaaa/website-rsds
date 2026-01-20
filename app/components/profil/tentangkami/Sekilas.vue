<template>
  <div class="">
    <!-- VIDEO HERO -->
    <div class="bg-black rounded-3xl overflow-hidden shadow-2xl">
      <div class="relative aspect-video">
        <!-- THUMBNAIL -->
        <template v-if="!isPlaying">
          <img :src="thumbnail" class="w-full h-full object-cover" loading="lazy" />

          <!-- OVERLAY -->
          <div
            class="absolute inset-0 bg-black/10 flex items-center justify-center cursor-pointer"
            @click="isPlaying = true"
          >
            <div
              class="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-black shadow-lg"
            >
              ▶
            </div>
          </div>
        </template>

        <!-- IFRAME -->
        <iframe
          v-else
          :src="youtubeEmbed + '&autoplay=1'"
          class="w-full h-full"
          frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- VIDEO INFO -->
    <div class="max-w-5xl mx-auto px-1 mt-5">
      <p class="text-sm font-semibold text-emerald-600 mb-2">Profil Rumah Sakit</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">RSUD Dr. Soetomo</h2>

      <div class="space-y-5 text-gray-600 leading-relaxed text-justify">
        <p>
          Rumah Sakit Umum Daerah (RSUD) Dokter (Dr.) Soetomo merupakan rumah sakit milik
          Pemerintah Provinsi Jawa Timur dengan predikat
          <strong>Kelas A Pendidikan</strong> dan
          <strong>Rujukan Tersier Nasional</strong>. Rumah sakit ini berdiri sejak
          <strong>29 Oktober 1938</strong> dengan nama
          <em>Centrale Burgerlijke Ziekenhuis (CBZ)</em>.
        </p>

        <p>
          RSUD Dr. Soetomo beralamat di
          <strong>
            Jalan Mayjend. Prof. Dr. Moestopo No. 6–8, Kecamatan Gubeng, Kelurahan
            Airlangga, Kota Surabaya, Provinsi Jawa Timur, Kode Pos 60286 </strong
          >.
        </p>

        <p>
          RSUD Dr. Soetomo telah meraih
          <strong>Akreditasi Nasional KARS Paripurna</strong> sejak tahun 2014 dan pada
          tahun 2018 memperoleh akreditasi <strong>Academic Medicine Center</strong> oleh
          <strong>Joint Commission International (JCI)</strong>. Berbagai sistem pelayanan
          juga telah terstandar, termasuk IRJ, IGD, serta manajemen berbasis ISO 9001.
        </p>

        <p>
          Kini, RSUD Dr. Soetomo terus beradaptasi dan berkomitmen untuk memberikan
          pelayanan terbaik bagi seluruh masyarakat dengan mengusung tagline
          <strong class="text-emerald-600">
            “Innovating Efficiency, Regulating Dependency” </strong
          >.
        </p>

        <p>
          Dengan menjunjung tinggi nilai
          <strong>Etika, Integritas, Profesionalisme, dan Inovasi</strong>, RSUD Dr.
          Soetomo bertekad menjadi rumah sakit tersier yang terpercaya, aman, bermutu
          tinggi, dan mandiri demi pelayanan kesehatan terbaik bagi masyarakat.
        </p>
      </div>
    </div>

    <!-- COMPANY PROFILE -->
    <div
      class="relative bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-10 shadow-lg mt-10"
    >
      <!-- Icon -->
      <div
        class="absolute -top-6 left-10 w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg"
      >
        <i class="fas fa-building"></i>
      </div>

      <div class="pt-8">
        <h3 class="text-2xl font-bold text-gray-900">Company Profile RSUD Dr. Soetomo</h3>
        <p class="mt-3 text-gray-600 max-w-2xl">
          Dokumen resmi yang memuat profil, visi misi, layanan unggulan, serta peran RSUD
          Dr. Soetomo sebagai rumah sakit rujukan nasional dan rumah sakit pendidikan.
        </p>

        <!-- ACTION -->
        <div class="mt-6">
          <a
            href="/file/company-profile-rsud-soetomo.pdf"
            target="_blank"
            class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
          >
            <span>Download Company Profile</span>
            <span class="text-lg">⤓</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const video = {
  id: "otpfYt1hTYc",
  title: "Company Profile RSUD Dr. Soetomo",
  description:
    "Podcast RSUD Dr. Soetomo membahas pentingnya kesadaran terhadap resistensi antimikroba dalam meningkatkan mutu pelayanan kesehatan.",
};

const youtubeEmbed = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0`;

const isPlaying = ref(false);

const thumbnail = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
</script>
