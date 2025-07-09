/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { usePreferredColorScheme } from '@vueuse/core'

const preferredColor = usePreferredColorScheme()

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const vuetify = createVuetify({
  theme: {
    defaultTheme: preferredColor.value,
  },
})

watch(preferredColor, (newVal) => {
  vuetify.theme.global.name.value = newVal
}, { immediate: true })

export default vuetify
