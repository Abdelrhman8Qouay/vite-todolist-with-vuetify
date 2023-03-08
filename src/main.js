import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create ( Pinia ) Store
import { createPinia } from 'pinia'
const pinia = createPinia()

// Get CSS file ( main.css )
import './assets/main.css'

// Create ( Vuetify ) App
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// Get Icons With ( Vuetify ) And ( FontAwesome )
import { aliases, fa } from 'vuetify/lib/iconsets/fa-svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons";
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});
library.add(fas) // Include needed icons
library.add(fab) // Include needed icons


createApp(App).use(pinia).component('font-awesome-icon', FontAwesomeIcon).use(router).use(vuetify).mount('#app')
