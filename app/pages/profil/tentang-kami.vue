<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 min-h-screen">
    <!-- BREADCRUMB -->
    <div class="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-600">
      <nav class="flex items-center gap-2">
        <span class="hover:text-emerald-600 cursor-pointer">Home</span>
        <span>/</span>
        <span class="hover:text-emerald-600 cursor-pointer">Profil</span>
        <span>/</span>
        <span class="text-emerald-600 font-semibold"> Tentang Kami </span>
      </nav>
    </div>

    <!-- HERO -->
    <div class="max-w-7xl mx-auto px-6 py-5">
      <div class="relative bg-emerald-600 rounded-3xl p-10 text-white overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-500 opacity-90"
        ></div>

        <div class="relative z-10 max-w-3xl">
          <h1 class="text-4xl font-bold">Profil RSUD Dr. Soetomo</h1>
          <p class="mt-3 text-emerald-100">Rumah Sakit Pendidikan dan Rujukan Nasional</p>
        </div>

        <!-- Pattern Accent -->
        <div
          class="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
        ></div>
        <img
          src="/images/logo/logo_white.png"
          alt="Logo RSUD"
          class="absolute left-1 top-1/2 w-40 -rotate-1 opacity-10 -translate-y-1/2 pointer-events-none"
        />
      </div>
    </div>

    <!-- TABS -->
    <div class="max-w-7xl mx-auto px-6 -mt-4">
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <div class="relative flex justify-center gap-8">
          <button
            v-for="(tab, index) in tabs"
            :key="tab.key"
            ref="tabRefs"
            @click="setActiveTab(tab.key, index)"
            class="px-2 py-3 font-semibold transition-colors duration-300"
            :class="
              activeTab === tab.key
                ? 'text-emerald-600'
                : 'text-gray-500 hover:text-emerald-600'
            "
          >
            {{ tab.label }}
          </button>

          <!-- MOVING UNDERLINE -->
          <span
            class="absolute bottom-0 h-[3px] bg-emerald-600 transition-all duration-300"
            :style="underlineStyle"
          ></span>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="max-w-7xl mx-auto px-6 py-16">
      <transition name="fade" mode="out-in">
        <component
          :is="tabComponent"
          :key="activeTab"
          class="bg-white rounded-3xl shadow-lg p-10 -mt-10"
        />
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";

import Sekilas from "@/components/profil/tentangkami/Sekilas.vue";
import Sejarah from "@/components/profil/tentangkami/Sejarah.vue";
import Lambang from "@/components/profil/tentangkami/Lambang.vue";
import Mars from "@/components/profil/tentangkami/Mars.vue";

const tabs = [
  { key: "sekilas", label: "Sekilas" },
  { key: "sejarah", label: "Sejarah" },
  { key: "lambang", label: "Lambang" },
  { key: "mars", label: "Mars & Himne" },
];

const activeTab = ref("sekilas");
const tabRefs = ref([]);
const underlineStyle = ref({
  width: "0px",
  transform: "translateX(0px)",
});

// mapping tab → component
const tabComponent = computed(
  () =>
    ({
      sekilas: Sekilas,
      sejarah: Sejarah,
      lambang: Lambang,
      mars: Mars,
    }[activeTab.value])
);

const setActiveTab = async (key, index) => {
  activeTab.value = key;
  await nextTick();
  moveUnderline(index);
};

const moveUnderline = (index) => {
  const el = tabRefs.value[index];
  if (!el) return;

  underlineStyle.value = {
    width: `${el.clientWidth}px`,
    left: `${el.offsetLeft}px`,
  };
};

onMounted(() => {
  nextTick(() => moveUnderline(0));
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
