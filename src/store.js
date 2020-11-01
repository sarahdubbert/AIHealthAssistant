import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalPoints: 15

  },
  mutations: {
    increasePointsSleep(state, numHours) {
      state.totalPoints += (2 * numHours);
    },

    increasePointsExercise(state, numHours) {
      state.totalPoints += (5 * numHours);
    },

    increasePointsEating(state, calories) {
      state.totalPoints += (4 * calories);
    },

    getPoints(state) {
      return state.totalPoints;
    }

  },
  actions: {

  }
});
