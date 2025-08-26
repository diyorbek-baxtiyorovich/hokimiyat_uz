// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
import 'typeface-inter'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  defaultSet: 'mdi',
  directives,
  typography: {
    defaultFontFamily: 'Inter',
  },
})
