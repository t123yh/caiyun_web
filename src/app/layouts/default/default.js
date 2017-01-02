/* ============
 * Default Layout
 * ============
 *
 * Used for the home and account pages
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

import {
  mapGetters
} from 'vuex';

import modal from 'components/modal.vue';

export default {
  components: {
    modal: modal
  },
  methods: {
    showAlert(data) {
      this.modalTitle = data.title;
      this.modalContent = data.description;
      this.showModal = true;
    },
    hideAlert () {
      this.showModal = false;
    },
  },
  data() {
    return {
      showModal: false,
      modalTitle: '',
      modalContent: '',
    };
  },
  computed: Object.assign({},
    mapGetters({
      weatherData: 'weatherData',
    }), {
      alertCount() {
        // alert('asdf');
        if (this.weatherData.alert == undefined) {
          return 0;
        } else {
          return this.weatherData.alert.content.length;
        }
      },
      weatherAlerts() {
        if (this.weatherData.alert == undefined) {
          return [];
        } else {
          return this.weatherData.alert.content;
        }
      },
    }),
  mounted() {}
};
