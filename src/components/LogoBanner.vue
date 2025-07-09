<template>
  <div ref="marquee" class="logo-marquee">
    <div ref="track" class="logo-track">
      <a v-for="logo in logos" :key="logo.name" :href="logo.href" :title="logo.title" target="_blank">
        <img :src="`/src/assets/${logo.name}.svg`" :alt="logo.title" :class="['logo', logo.name]" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const logos = [
  { name: 'vite', title: 'Vite', href: 'https://vite.dev/' },
  { name: 'vue', title: 'Vue', href: 'https://vuejs.org/' },
  { name: 'vuetify', title: 'Vuetify', href: 'https://vuetifyjs.com/' },
  { name: 'pinia', title: 'Pinia', href: 'https://pinia.vuejs.org/' },
  { name: 'vitest', title: 'Vitest', href: 'https://vitest.dev/' },
  { name: 'vueuse', title: 'VueUse', href: 'https://vueuse.org/' },
  { name: 'playwright', title: 'Playwright', href: 'https://playwright.dev/' },
  { name: 'prettier', title: 'Prettier', href: 'https://prettier.io/' },
  { name: 'tailwindcss', title: 'TailwindCSS', href: 'https://tailwindcss.com/' },
  { name: 'unplugin', title: 'Unplugin', href: 'https://unplugin.unjs.io/' },
]

const marquee = ref<HTMLDivElement | null>(null)
const track = ref<HTMLDivElement | null>(null)

onMounted(() => {
  // Clone the track for seamless looping
  const trackEl = track.value
  const bannerWidth = trackEl?.clientWidth
  let totalWidth = bannerWidth ?? 0
  while (totalWidth < window.innerWidth * 2) {
    const clone = trackEl?.cloneNode(true) as HTMLElement
    clone.setAttribute('aria-hidden', 'true')
    trackEl?.parentNode?.appendChild(clone)
    totalWidth += bannerWidth ?? 0
  }
})
</script>

<style scoped>
.logo-marquee {
  /* overflow: hidden; */
  width: 100%;
  background: transparent;
  padding: 3.5rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-track {
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  gap: 2em;
  padding: 0 1em;
  animation: marquee 20s linear infinite;
}

.logo {
  height: 100px;
  margin: 0 2rem;
  transition: filter 0.3s;
  will-change: filter;
}
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #41d1ff) drop-shadow(0 0 1em #bd34fe);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883) drop-shadow(0 0 1em #35495e);
}
.logo.vuetify:hover {
  filter: drop-shadow(0 0 2em #1697f6) drop-shadow(0 0 1em #1867c0);
}
.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #ffe56c) drop-shadow(0 -1em 1em #52ce63);
}
.logo.vitest:hover {
  filter: drop-shadow(0 0 2em #fcc72b) drop-shadow(0 0 1em #729b1b);
}
.logo.vueuse:hover {
  filter: drop-shadow(0 0 2em #42b883) drop-shadow(0 0 1em #35495e);
}
.logo.playwright:hover {
  filter: drop-shadow(1em 0 2em #2ead33) drop-shadow(-1em 0 1em #e2574c);
}
.logo.prettier:hover {
  filter: drop-shadow(0 0 2em #56b3b4) drop-shadow(0 0 1em #ea5e5e);
}
.logo.tailwindcss:hover {
  filter: drop-shadow(0 0 2em #38bdf8) drop-shadow(0 0 1em #0ea5e9);
}
.logo.unplugin:hover {
  filter: drop-shadow(0 0 2em #d4d4d4) drop-shadow(0 0 1em #a0a0a0);
}
@keyframes marquee {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
