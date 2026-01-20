// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  css: [
    "~/assets/css/main.css",

    "@fortawesome/fontawesome-free/css/all.min.css",

    "bootstrap-icons/font/bootstrap-icons.css",
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  devtools: { enabled: true },
  app: {
    head: {
      title: 'Webiste',
      titleTemplate: '%s – RSUD Dr. Soetomo',

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/rsds-icon.ico'
        }
      ],

      meta: [
        {
          name: 'description',
          content: 'Website Resmi RSUD Dr. Soetomo'
        }
      ]
    }
  }
});
