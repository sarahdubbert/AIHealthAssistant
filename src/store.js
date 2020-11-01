import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const pointStore = new Vuex.Store({
  state: {
    totalPoints: 0

  },
  mutations: {
    increasePointsSleep(numHours) {
      totalPoints = totalPoints + (2 * numHours);
    },

    getPoints() {
      return this.$pointStore.totalPoints;
    }

  },
  actions: {

  }
});
