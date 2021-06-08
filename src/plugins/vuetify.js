import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#41B883",
      },
      dark: {
        primary: "#34495E"
      }
    }
  },
  breakpoint: {
    thresholds: {
      xs: 420,
      sm: 640,
      md: 800,
      lg: 1200
    }
  }
});
