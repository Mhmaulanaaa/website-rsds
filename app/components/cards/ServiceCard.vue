<template>
  <NuxtLink
    :to="item.route"
    class="group relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-100"
  >
    <!-- Glow -->
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_70%)]"
    ></div>

    <div class="relative text-center">
      <img
        :src="item.icon"
        class="mx-auto h-20 mb-6 transition-transform duration-300 group-hover:scale-110"
        alt=""
      />

      <h4 class="text-md font-semibold text-gray-900 leading-snug whitespace-pre-line">
        {{ item.title }}
      </h4>

      <p v-if="item.desc" class="text-sm text-gray-600 mt-3">
        {{ item.desc }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
