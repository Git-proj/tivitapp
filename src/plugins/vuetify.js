import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#2196f3',
            secondary: '#03a9f4',
            accent: '#00bcd4',
            error: '#f44336',
            warning: '#ffc107',
            info: '#607d8b',
            success: '#4caf50',
          },
        },
      },
      options: {
        customProperties: true
    },
});
