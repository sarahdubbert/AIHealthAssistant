import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalPoints: 15

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
