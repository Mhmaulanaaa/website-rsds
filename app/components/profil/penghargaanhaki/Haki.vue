<script setup>
import { ref, onUnmounted } from "vue";

const selected = ref(null);

const hakis = [
  {
    id: 1,
    title: "Electronic Medical Record Soetomo (EMR Soetomo)",
    thumb: "/images/penghargaan/Haki/emr.png",
    preview: "/images/penghargaan/Haki/emr.png",
  },
  {
    id: 2,
    title: "Aplikasi Budgeting, Key Performance Indikator and Evaluation (BRIEV)",
    thumb: "/images/penghargaan/Haki/briev.png",
    preview: "/images/penghargaan/Haki/briev.png",
  },
  {
    id: 3,
    title: "Emonev RSUD Dr. Soetomo",
    thumb: "/images/penghargaan/Haki/emonev.png",
    preview: "/images/penghargaan/Haki/emonev.png",
  },
  {
    id: 4,
    title: "KEPK Online RSUD Dr. Soetomo",
    thumb: "/images/penghargaan/Haki/kepk.png",
    preview: "/images/penghargaan/Haki/kepk.png",
  },
];

const openPreview = (item) => {
  selected.value = item;
  document.body.style.overflow = "hidden";
};

const closePreview = () => {
  selected.value = null;
  document.body.style.overflow = "";
};

onUnmounted(() => {
  selected.value = null;
  document.body.style.overflow = "";
});
</script>

<template>
  <!-- CARD CONTAINER -->
  <div class="bg-white rounded-xl shadow-sm p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="item in hakis"
        :key="item.id"
        @click="openPreview(item)"
        class="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition"
      >
        <div class="p-6 text-center">
          <img :src="item.thumb" class="mx-auto w-[200px] rounded" />
          <h3 class="mt-6 text-sm font-semibold text-gray-800">
            {{ item.title }}
          </h3>
        </div>
      </div>
    </div>
  </div>

  <!-- PREVIEW MODAL -->
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="selected"
        class="fixed inset-0 z-[999] bg-black/30 flex items-center justify-center px-3 sm:px-6"
        @click.self="closePreview"
      >
        <div
          class="bg-white w-full sm:w-[90vw] md:w-[70vw] lg:w-[40vw] h-[96vh] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden"
        >
          <!-- DOCUMENT -->
          <div class="flex-1 flex justify-center items-center bg-white">
            <div
              class="bg-white aspect-[210/297] w-[92vw] sm:w-[420px] lg:w-[500px] rounded-md border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <img :src="selected.preview" class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- FOOTER -->
          <div class="border-t border-gray-100 px-6 py-4 flex justify-end">
            <button
              @click="closePreview"
              class="px-8 py-2 rounded-xl bg-white border border-gray-200 text-gray-600 font-light hover:bg-gray-50 active:scale-95 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
